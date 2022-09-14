
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardTinder(props: Card) {
  return (
    <Card> 
        <Card.Content>
            <Title>C'est un titre</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
  );
}


const styles = StyleSheet.create({
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
    },
    helpContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      textAlign: 'center',
    },
});
  