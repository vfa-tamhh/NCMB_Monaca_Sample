# NCMB Monaca sample -  *NCMB_Monaca_Sample*

**NCMB_Monaca_Sample** is a monaca app building some functionality to testing for new realease.

Submitted by: **Jimmy Huynh**

Time spent: **40** hours spent in total

## NCMB Monaca sample

The following **required** functionality is completed:

* [x] User can **execute Quick start**
  * [x] User can **Insert Data store sample**
* [x] User can **execute Member management**
  * [x] User can **New user registration**
  * [x] User can **Login 1**
  * [x] User can **Login 2**
  * [x] User can **Current user**
  * [x] User can **Logout**
  * [x] User can **Confirmation of e-mail address**
  * [x] User can **Password reset**
  * [x] User can **Member registration by email address**
  * [x] User can **Login with email address**
  * [x] User can **Anonymous authentication**
  * [x] User can **Create Role**
  * [x] User can **Add member to role**
  * [x] User can **Add Child Role**
  * [x] User can **Member child role acquisition**
* [x] User can **execute Data store**
  * [x] User can **Object storage**
  * [x] User can **Get Object**
  * [x] User can **Update object**
  * [x] User can **Delete object**
  * [x] User can **Pointer**
  * [x] User can **relation**
  * [x] User can **Using basic search**
  * [x] User can **Basic query operator**
  * [x] User can **Query on array**
  * [x] User can **Query for pointer**
  * [x] User can **Query for relation**
  * [x] User can **Query composition**
  * [x] User can **Search using the result of subquery**
  * [x] User can **Specify the number of acquisition**
  * [x] User can **Specifying the acquisition start position**
  * [x] User can **Sort search results**
  * [x] User can **Acquisition of the number of search results**
  * [x] User can **Save score**
  * [x] User can **Get ranking**
  * [x] User can **Set ACL on the app side**
* [x] User can **execute Push Notification**
  * [x] User can **Search for push notifications**
  * [x] User can **Update push notifications**
  * [x] User can **Delete push notifications**
  * [x] User can **Settings in the app**
  * [x] User can **Rich push notification**
* [x] User can **execute SNS cooperation**
  * [x] User can **Facebook Login (Android)**
  * [x] User can **Apple Login (iOS)**
  * [x] User can **Apple Link With NCMB user (iOS)**
  * [x] User can **Apple Unlink With NCMB user (iOS)**
  * [x] User can **Twitter Login (Javascript)**
  * [x] User can **Twitter Link With NCMB user (Javascript)**
  * [x] User can **Twitter Unlink With NCMB user (Javascript)**
  * [x] User can **Goolge Login (Javascript)**
  * [x] User can **Goolge Link With NCMB user (Javascript)**
  * [x] User can **Goolge Unlink With NCMB user (Javascript)**
* [x] User can **execute File store**
  * [x] User can **File search**
  * [x] User can **Update file ACL**
  * [x] User can **Delete file**
  * [x] User can **Get contents of file**
  * [x] User can **Get binary data and display image**
  * [x] User can **View public image**
* [ ] User can **execute Location information search**
* [x] User can **execute Script**
  * [x] User can **Script GET**
  * [x] User can **Script POST**
  * [x] User can **Script Sample GET**
  * [x] User can **Script Sample POST**
  * [x] User can **Script Sample PUT**
  * [x] User can **Script Sample DELETE**

## NCMB Monaca sample

  Here's a NCMB Monaca sample of implemented above functionality:

  <img src='/readme_images/Overview.gif' title='NCMB Monaca sample' />

  GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Import this project into Monaca console

1. Download this project as zip file:

<img src='/readme_images/00001.png' title='Download as zip' />

2. Import into Monaca console:

- From Monaca console:
  - Click on Import button.

  <img src='/readme_images/00002.png' title='Import 1' />

  - Click on Upload project package.

  <img src='/readme_images/00003.png' title='Import 2' />

  - Click on Choose a file and choose a zip file has been downloaded above.

  <img src='/readme_images/00004.png' title='Import 3' />

  - Input your project name and your description after that click on import project button.

  <img src='/readme_images/00005.png' title='Import 4' />

## Configuration for your app
When using this app, you need to config some app key as below:

#### Quick start

1. Go to `js/config.js` Change your `application_key` and `client_key`

```
const ncmbproperty = {
    application_key : "YOUR_APPLICATION_KEY",
    client_key:"YOUR_CLIENT_KEY"
};
```

2. Config newest NCMB SDK. `Configure -> JS/CSS Component settings...`

<img src='/readme_images/00006.png' title='Import 4' />

Remove older NCMB SDK and add new NCMB SDK.

<img src='/readme_images/00007.png' title='Import 4' />

<img src='/readme_images/00008.png' title='Import 4' />

### Push Notification

This project support push notification for Android and iOS.

1. Android:

- Config on NCMB console side.
- Change your file `google-services.json`.
- Change your android package name.

2. iOS:

- Config on NCMB console side.
- Change your bundle ID.

### SNS Cooperation

1. Facebook integration: (Android)
- In this project we follow the guide [Facebook Single Sign-on App](https://docs.monaca.io/en/sampleapp/samples/facebook_sso/) Would you like to refer it before set up as below step.
- Create your app and get `APP_ID` and `APP_NAME` follow guide at [Facebook develop](https://developers.facebook.com/)
- Put your `APP_ID` and `APP_NAME` into the plugin:
  - `Configure -> Cordova plugin settings...` 
  - Hover your mouse on `Facebook connect` and click on `Configure`

  <img src='/readme_images/00009.png'/>

  - Put your `APP_ID` and `APP_NAME` after that click on `OK`

  <img src='/readme_images/00010.png'/>

- Build app for Android and run it.

2. Apple cooperation: (iOS 13)

- Go to `js/config.js` Change your `client_id`

```
const apple_property = {
    client_id:"com.apple.****"
}
```

- Config your project on Apple side and NCMB console side.

- Build app for iOS and run it.

3. Twitter integration: (javascript)
- In this project we follow the guide [Authenticate Using Twitter in JavaScript](https://firebase.google.com/docs/auth/web/twitter-login) Would you like to refer it before set up as below step.
- Go to `js/config.js` Change your `oauth_consumer_key` and `consumer_secret`

```
const twitter_key = {
    oauth_consumer_key: "oauth_consumer_key",
    consumer_secret: "consumer_secret"
}
```
- Go to `template/sns-cooperation/twitter.html` change your settings:

```
var firebaseConfig = {
        apiKey: "apiKey",
        authDomain: "authDomain",
        databaseURL: "databaseURL",
        projectId: "projectId",
        storageBucket: "storageBucket",
        messagingSenderId: "messagingSenderId",
        appId: "appId",
        measurementId: "measurementId"
    };
```
- Let run your app.

4. Twitter integration: (javascript)
- In this project we follow the guide [Authenticate Using Google Sign-In with JavaScript](https://firebase.google.com/docs/auth/web/google-signin) Would you like to refer it before set up as below step.

- Go to `template/sns-cooperation/google.html` change your settings:

```
var firebaseConfig = {
        apiKey: "apiKey",
        authDomain: "authDomain",
        databaseURL: "databaseURL",
        projectId: "projectId",
        storageBucket: "storageBucket",
        messagingSenderId: "messagingSenderId",
        appId: "appId",
        measurementId: "measurementId"
    };
```
- Let run your app.

### File store

- Upload `data/file-store/abc.txt` and `data/file-store/mBaaS_image.png` into your mbaas console.
- Upload: `Filestore/Upload`
<img src='/readme_images/file_001.png'/>

- Select `mBaaS_image.png` and public link as image below:
<img src='/readme_images/file_002.png'/>
<img src='/readme_images/file_003.png'/>

- Copy below link into `js/service.js` `img_url`
<img src='/readme_images/file_004.png'/>

## License

    Copyright [2020] [Jimmy Huynh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.