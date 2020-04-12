import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: 30px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

export const TextHeader = styled.Text`
    font-size: 16px;
    color: #737380;
`;

export const TextHeaderBold = styled.Text`
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-top: 48px;
    margin-bottom: 16px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;


export const IncidentList = styled.FlatList`
    margin-top: 32px;
`;

export const Incident = styled.View`
    padding: 24px;
    margin-bottom: 16px;
    background-color: #FFF;
    border-radius:8px;
`;

export const IncidentProperty = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #41414d;
`;

export const IncidentValue = styled.Text`
    font-size: 15px;
    margin-top: 8px;
    margin-bottom: 24px;
    color:#737380;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const TextButton = styled.Text`
    padding: 12px;
    background-color: #E02041;
    color: #FFF;
    font-weight: bold;
    border-radius: 8px;
`;