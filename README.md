# Code challenge digital house

## Demo

### Android

<img src="https://github.com/AngelTrinidad/digital-house-challenge/blob/main/docs/imgs/android-product-list.png" width="128" alt="Product List Screen"/>
<img src="https://github.com/AngelTrinidad/digital-house-challenge/blob/main/docs/imgs/android-product-filtered.png" width="128" alt="Product List Screen 2"/>
<img src="https://github.com/AngelTrinidad/digital-house-challenge/blob/main/docs/imgs/android-product-detail.png" width="128" alt="Product Detail Screen"/>

## App dependencies

- React Native(0.71.2)
- Typescript
- React Navigation(6)
- React Query
- React Native Testing Library & Jest

## Project Structure

    .
    ├── api             # Axios config & api services
    ├── assets          # App assets (fonts, images)
    ├── components      # App components, with Atom Design
    ├── config          # Third packages and App Theme config
    ├── constants       # Global constants
    ├── helpers         # Util functions
    ├── hooks           # Custom hooks
    ├── interfaces      # Global interfaces
    ├── mocks           # Test mocks
    ├── navigation      # Navigation setup
    ├── screens         # App screens

## How to start

First, you have to set up your environment, you can follow all the steps in the [official React Native doc](https://reactnative.dev/docs/environment-setup) to do so. Once your enviromnet is ready:

1. Install dependencies

   ```bash
   $ yarn
   ```

2. Instal pods

   ```bash
   $ cd ios && pod install
   ```

## How to run

### Android

```bash
$ yarn android
```

### iOS

```bash
$ yarn iOS
```
