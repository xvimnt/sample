import React from "react";
import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';

export default function ChatBot() {
    return (
        <AmplifyChatbot
            botName="sampleBot"
            botTitle="Ordena Aqui"
            welcomeMessage="Hola, mucho gusto, yo te ayudare a ordenar..."
            width="600px"
        />
    );
}
