# react-native-secure-api

A react-native library to secure api credentials(URL, Key, Secret) from exposing to source control and bundle in apk files.

## Installation

```sh
npm install react-native-secure-api
```

or

```sh
yarn add react-native-secure-api
```

## Manual Installation

# local.properties

Add the following lines to local.properties

```properties
BASE_URL_DEV="YOUR_DEV_BASE_URL"
BASE_URL="YOUR_BASE_URL"
API_KEY="YOUR_API_KEY"
API_SECRET="YOUR_API_SECRET"
```

# build.gradle(app)

Add the following lines to android>app>build.gradle

```gradle
Properties properties = new Properties()//<-Add this line
properties.load(project.rootProject.file("local.properties").newDataInputStream())//<-Add this line
android {
        ...
}

defaultConfig {
    buildTypes {
        debug{
            buildConfigField 'String', 'BASE_URL_DEV', properties.getProperty('BASE_URL_DEV', '"no URL"')//<- Add this line
             buildConfigField 'String', 'API_KEY', properties.getProperty('API_KEY', '"no key"')//<- Add this line if you need api key
              buildConfigField 'String', 'API_SECRET', properties.getProperty('API_SECRET', '"no URL"')//<- Add this line if you need api secret
        }
        release {
            buildConfigField 'String', 'BASE_URL', properties.getProperty('BASE_URL', '"no URL"')//<- Add this line
              buildConfigField 'String', 'API_KEY', properties.getProperty('API_KEY', '"no key"')//<- Add this line if you need api key
              buildConfigField 'String', 'API_SECRET', properties.getProperty('API_SECRET', '"no URL"')//<- Add this line if you need api secret
        }
    }
}
```

## Usage

```js
import Credentials from 'react-native-secure-api';

// ...

const getUrl = async () => {
  const URL = await Credentials.get('BASE_URL_DEV');
  const API_KEY = await Credentials.get('API_KEY');
  const API_SECRET = await Credentials.get('API_SECRET');
  console.log(URL, API_KEY, API_SECRET);
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
