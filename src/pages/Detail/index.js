import React from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import {
    Container,
    Header,
    Incident,
    IncidentProperty,
    IncidentValue,
    Contact,
    Title,
    Description,
    ButtonView,
    Button,
    ButtonText
} from './styles';


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute(); //o use orute tem todos dados da pagina
    const incident = route.params.incident; //pegando o parametro que foi passado pelo nome que foi passado;

    const valueFormatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value);

    const message = `Olá ${incident.name}, estou entrando em contado pois gostaria de ajudar no caso "${incident.title}" com o valor de ${valueFormatted}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
    }
    
    return (
        <Container>
            <Header>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={20} color="#E02041" />
                </TouchableOpacity>
            </Header>
            <Incident>
                <IncidentProperty style={{marginTop: 0}} >ONG:</IncidentProperty>
                <IncidentValue>{incident.name} de {incident.city}/{incident.uf} </IncidentValue>

                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title} </IncidentValue>

                <IncidentProperty>VALOR:</IncidentProperty>
                <IncidentValue> 
                    {valueFormatted}
                </IncidentValue>
            </Incident>
            <Contact>
                <Title>Salve o dia!</Title>
                <Title>Seja o herói desse caso.</Title>
                <Description>Entre em contato:</Description>

                <ButtonView>
                    <Button onPress={sendWhatsapp}>
                        <ButtonText>WhatsApp</ButtonText>
                    </Button>
                    <Button onPress={sendMail}>
                        <ButtonText>E-mail</ButtonText>
                    </Button>
                </ButtonView>
            </Contact>
        </Container>
    );
}