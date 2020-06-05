import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import { styles } from "./styles";
import seed from '../Utils/dummy';
import * as bip39 from 'bip39';

class WalletCreation extends Component {
    state = {
        mnemonic: '',
    }

    setMnemonic = () => {
        this.setState({ mnemonic });
        const mnemonic = this.state.mnemonic
        console.log(`mnemonic: ${mnemonic}`)
        const hex = bip39.mnemonicToSeedSync(mnemonic).toString('hex')
        console.log(`setting seed ${hex}`)
        this.props.wallet
            .setSeed(hex)
            .then(() => {
                console.log(`Set seed success!`)
            })
            .catch(error => {
                console.log('setSeed error', error);
            })
    }

    byApp = () => {

    };

    byCard = (myCoolWalletS) => {
        myCoolWalletS.createWallet(12).then(_ => {

        })
    };

    verify = (myCoolWalletS, sum) => {
        // Sum all the seeds shown on CoolWalletS
        sum = '1313123'
        myCoolWalletS.sendCheckSum(sum).then(_ => {
            console.log(`Successfully create a new wallet!`)
        })
    }

    onChangeText = mnemonic => {
        console.log('onChangeText mnemonic', mnemonic);
        this.setState({ mnemonic })
    }

    render() {
        const { wallet, appPublicKey, reloadStorage } = this.props;
        const { title, container, inputStyle, defaultBtn, defaultColor } = styles;
        return (
            <View>
                <Text style={title}>Set Seed</Text>
                <View style={container}>
                    <TouchableOpacity style={defaultBtn} onPress={this.byApp}>
                        <Text style={defaultColor}>By app (12)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={defaultBtn} onPress={() => this.byCard(wallet)}>
                        <Text style={defaultColor}>By card (12)</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={inputStyle} onChangeText={this.onChangeText} />
                <TouchableOpacity style={defaultBtn} onPress={() => this.verify(wallet)}>
                    <Text style={defaultColor}>Verify</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default WalletCreation

