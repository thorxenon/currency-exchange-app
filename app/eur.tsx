import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { number2Currency } from "../handlers/number2Currency";
import { getEur } from "../services/awesomeapi";

export default function Screen(){
    const [ loading, setLoading ] = useState(true);
    const [ currentValue, setCurrentValue ] = useState<number>(0);

    const handleUpdateEuroPrice = async() =>{
        setLoading(true);
        const eur = await getEur();
        setLoading(false);
        setCurrentValue(eur);
    }

    useEffect(()=>{
        handleUpdateEuroPrice();
    },[]);

    return(
        <View style={styles.container}>
            <Image
                source={require("../assets/euro.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            {loading && <Text style={styles.h2}>Carregando...</Text>}

            {!loading &&
                <>
                    <Text style={styles.h2}>O Euro está:</Text>
                    <Text style={styles.currencyText}>{number2Currency(currentValue, 'pt-BR', 'BRL')}</Text>
                    <Button label="Atualizar preço" onPress={handleUpdateEuroPrice}/>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b1c2d",
        paddingHorizontal: 20
    },
    logo:{
        width: 200,
        height: 180
    },
    h2:{
        color: "#cccccc",
        fontSize: 24,
        marginTop: 30
    },
    currencyText:{
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 50
    }
});