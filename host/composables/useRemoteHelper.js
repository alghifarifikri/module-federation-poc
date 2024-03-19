import { loadRemoteModule } from "@softarc/native-federation";

const remoteHelper = loadRemoteModule("remote-app", "./utils/helper");

export default () => {
    const help = async () => {
        console.log('remoteHelper', remoteHelper)
        const helper = await remoteHelper
        console.log('helper', helper)
        return 'test'
    }
    return {
        help
    }
}