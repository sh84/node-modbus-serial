declare class ModbusRTU {
  constructor(port?: any);

  open(callback: Function): void;
  close(callback: Function): void;

  writeFC1(address: number, dataAddress: number, length: number, next: ModbusRTU.NodeStyleCallback<ModbusRTU.ReadCoilResult>): void;
  writeFC2(address: number, dataAddress: number, length: number, next: ModbusRTU.NodeStyleCallback<ModbusRTU.ReadCoilResult>): void;
  writeFC3(address: number, dataAddress: number, length: number, next: ModbusRTU.NodeStyleCallback<ModbusRTU.ReadRegisterResult>): void;
  writeFC4(address: number, dataAddress: number, length: number, next: ModbusRTU.NodeStyleCallback<ModbusRTU.ReadRegisterResult>): void;
  writeFC5(address: number, dataAddress: number, state: boolean, next: ModbusRTU.NodeStyleCallback<ModbusRTU.WriteCoilResult>): void;
  writeFC6(address: number, dataAddress: number, value: number, next: ModbusRTU.NodeStyleCallback<ModbusRTU.WriteRegisterResult>): void;

  writeFC15(address: number, dataAddress: number, states: Array<boolean>, next: ModbusRTU.NodeStyleCallback<ModbusRTU.WriteMultipleResult>): void;
  writeFC16(address: number, dataAddress: number, values: Array<number>, next: ModbusRTU.NodeStyleCallback<ModbusRTU.WriteMultipleResult>): void;

  // Connection shorthand API
  connectRTU(path: string, options: ModbusRTU.SerialPortOptions, next: Function): void;
  connectRTU(path: string, options: ModbusRTU.SerialPortOptions): Promise<void>;
  connectTCP(ip: string, options: ModbusRTU.TcpPortOptions, next: Function): void;
  connectTCP(ip: string, options: ModbusRTU.TcpPortOptions): Promise<void>;
  connectTcpRTUBuffered(ip: string, options: ModbusRTU.TcpRTUPortOptions, next: Function): void;
  connectTcpRTUBuffered(ip: string, options: ModbusRTU.TcpRTUPortOptions): Promise<void>;
  connectTelnet(ip: string, options: ModbusRTU.TelnetPortOptions, next: Function): void;
  connectTelnet(ip: string, options: ModbusRTU.TelnetPortOptions): Promise<void>;
  connectC701(ip: string, options: ModbusRTU.C701PortOptions, next: Function): void;
  connectC701(ip: string, options: ModbusRTU.C701PortOptions): Promise<void>;
  connectRTUBuffered(path: string, options: ModbusRTU.SerialPortOptions, next: Function): void;
  connectRTUBuffered(path: string, options: ModbusRTU.SerialPortOptions): Promise<void>;
  connectAsciiSerial(path: string, options: ModbusRTU.SerialPortOptions, next: Function): void;
  connectAsciiSerial(path: string, options: ModbusRTU.SerialPortOptions): Promise<void>;

  // Promise API
  setID(id: number): void;
  getID(): number;
  setTimeout(duration: number): void;
  getTimeout(): number;

  readCoils(dataAddress: number, length: number): Promise<ModbusRTU.ReadCoilResult>;
  readDiscreteInputs(dataAddress: number, length: number): Promise<ModbusRTU.ReadCoilResult>;
  readHoldingRegisters(dataAddress: number, length: number): Promise<ModbusRTU.ReadRegisterResult>;
  readInputRegisters(dataAddress: number, length: number): Promise<ModbusRTU.ReadRegisterResult>;
  writeCoil(dataAddress: number, state: boolean): Promise<ModbusRTU.WriteCoilResult>;
  writeCoils(dataAddress: number, states: Array<boolean>): Promise<ModbusRTU.WriteMultipleResult>;
  writeRegister(dataAddress: number, value: number): Promise<ModbusRTU.WriteRegisterResult>;
  writeRegisters(dataAddress: number, values: Array<number>): Promise<ModbusRTU.WriteMultipleResult>; // 16
}

declare namespace ModbusRTU {
  interface NodeStyleCallback<T> {
    (err: NodeJS.ErrnoException, param: T): void;
  }

  interface ReadCoilResult {
    data: Array<boolean>;
    buffer: Buffer;
  }

  interface ReadRegisterResult {
    data: Array<number>;
    buffer: Buffer;
  }

  interface WriteCoilResult {
    address: number;
    state: boolean;
  }

  interface WriteRegisterResult {
    address: number;
    value: number;
  }

  interface WriteMultipleResult {
    address: number;
    length: number;
  }

  interface SerialPortOptions {
    baudRate?: number;
    dataBits?: number;
    stopBits?: number;
    parity?: 'none' | 'even' | 'mark' | 'odd' | 'space';
    rtscts?: boolean;
    xon?: boolean;
    xoff?: boolean;
    xany?: boolean;
    flowControl?: boolean | Array<string>;
    bufferSize?: number;
    parser?: any;
    platformOptions?: SerialPortUnixPlatformOptions;
  }

  interface SerialPortUnixPlatformOptions {
    vmin?: number;
    vtime?: number;
  }

  interface TcpPortOptions {
    port?: number;
  }

  interface TcpRTUPortOptions {
    port?: number;
  }

  interface TelnetPortOptions {
    port?: number;
  }

  interface C701PortOptions {
    port?: number;
  }
}

export = ModbusRTU;
