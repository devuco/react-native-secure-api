import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-secure-api' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const SecureApi = NativeModules.SecureApi
  ? NativeModules.SecureApi
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const get = (key: string): Promise<string> => {
  return SecureApi.getKey(key);
};

const Credentials = { get };

export default Credentials;
