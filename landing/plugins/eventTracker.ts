import {defineNuxtPlugin} from "#app";
export default defineNuxtPlugin(({ $bus }) => {

    // @ts-ignore
    $bus.$on('getStartedClicked', (location) => {
        if(location === false) {
            $bus.$emit('openGetStarted', true);
        }
    });

    $bus.$on('closeGetStartedClicked', () => {
        $bus.$emit('closeGetStarted');
    });

    // @ts-ignore
    $bus.$on('wallet_connected', ({wallet}) => {

    })

    // @ts-ignore
    $bus.$on('asyncStarted', () => {
        $bus.$emit('loading', true);
    })

    $bus.$on('asyncFinished', () => {
        $bus.$emit('loading', false);
        $bus.$emit('stopLoading', true);
    })

});
