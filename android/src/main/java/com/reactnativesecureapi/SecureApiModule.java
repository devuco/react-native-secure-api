package com.reactnativesecureapi;

import android.content.pm.ApplicationInfo;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.lang.reflect.Field;

@ReactModule(name = SecureApiModule.NAME)
public class SecureApiModule extends ReactContextBaseJavaModule {
  public static final String NAME = "SecureApi";

  public SecureApiModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @ReactMethod
  public void getKey(String key, Promise promise) {
    ApplicationInfo applicationInfo = null;
    ReactApplicationContext reactApplicationContext = getReactApplicationContext();

    Class<?> clazz;
    try {
      clazz = Class.forName(reactApplicationContext.getPackageName() + ".BuildConfig");
      Field field = clazz.getField(key);
     promise.resolve(field.get(null));
    } catch (Exception e) {
      promise.reject(e);
    }


  }
}
