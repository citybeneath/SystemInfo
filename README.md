# SystemInfo Module

This module provides functions to retrieve basic information about the operating system, CPU, and graphics card of the system.

## Installation

To use this module, simply require it in your code using:

```javascript
const systemInfo = require('./systemInfo');
```

## Functions

### `getOSInfo()`

Returns an object containing basic information about the operating system, such as the hostname, type, platform, architecture, release version, and total memory.

### `getCPUInfo()`

Returns a promise that resolves to an object containing information about the CPU, such as model, speed, cores, and manufacturer.

### `getGraphicsInfo()`

Returns a promise that resolves to an object containing information about the graphics card, such as model, vendor, and vram.

## Example

```javascript
const systemInfo = require('./systemInfo');

systemInfo.getOSInfo(); // { hostname: 'my-computer', type: 'Darwin', platform: 'darwin', arch: 'x64', release: '19.6.0', totalMemory: 8589934592 }

systemInfo.getCPUInfo().then(cpuInfo => {
  console.log(cpuInfo);
});

systemInfo.getGraphicsInfo().then(graphicsInfo => {
  console.log(graphicsInfo);
});
```

## Dependencies

- `os`: Node.js built-in module for operating system-related functionalities.
- `systeminformation`: External library for retrieving system information.

## License

This project is licensed under the MIT License - see the [LICENSE.TXT](LICENSE.TXT) file for details.