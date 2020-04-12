import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: 30px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Incident = styled.View`
    margin-top: 32px;
    padding: 24px;
    background: #FFF;
    border-radius: 8px;
`;

export const IncidentProperty = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #41414d;
    margin-top: 24px;
`;

export const IncidentValue = styled.Text`
    font-size: 15px;
    color: #737380;
    margin-top: 8px;
`;

export const Contact = styled.View`
    margin-top: 12px;
    padding: 24px;
    background: #FFF;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    color: #13131a;
`;

export const Description = styled.Text`
    font-size: 15px;
    color: #737380;
    margin-top: 16px;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: #E02041;
    width: 48%;
    height: 50px;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;

