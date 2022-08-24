#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SecureApi, NSObject)


RCT_EXPORT_METHOD(getKey:(NSString*)key resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  
  NSString *apikey =[[NSBundle mainBundle] objectForInfoDictionaryKey:key];
  if (apikey != NULL && apikey != nil) {
    resolve(apikey);

  }
  else
  {
    NSLog(@"key not found");
  }
  
}
@end
