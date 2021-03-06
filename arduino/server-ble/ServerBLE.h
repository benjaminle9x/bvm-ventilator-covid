/*
  ServerBLE.h - Library for ESP32 board
  Created by Catalin Rizea, May 8, 2020
  Released into the public domain 
*/
#ifndef ServerBLE_h
#define ServerBLE_h

#include <Arduino.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include <BLE2902.h>

class ServerBLE {
  public:
    ServerBLE();
    void start();
    void setSensorsValue(char* buffer);
    std::string getSettings();
  private:
    BLEServer *_server;
    BLECharacteristic *_sensorsCharacteristic;
    BLECharacteristic *_settingsCharacteristic;
    BLEService *createBLEReadService(
      byte type,  
      char* serviceUUID, 
      char* characteristicUUID
    );
     BLEService *createBLEWriteService(
      byte type,  
      char* serviceUUID, 
      char* characteristicUUID
    );
};

#endif
