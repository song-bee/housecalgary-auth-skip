# Calgary Houses Auth Skip Extension

A Chrome extension that automatically skips the authentication dialog on Calgary house listing detail pages. This helps streamline browsing by removing the repetitive authentication prompt.

## Purpose

When browsing house listings on housescalgary.ca, users often encounter an authentication dialog that interrupts the browsing experience. This extension automatically closes that dialog by calling `closeAuth()` when visiting property detail pages, making the browsing experience more seamless.

## Features

- Automatically detects property detail pages (URLs starting with "https://www.housescalgary.ca/property-search/detail")
- Closes the authentication dialog automatically after page load
- Works silently in the background
- Includes error handling and console logging for troubleshooting

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Development

To modify the extension:

1. Make your changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes on a property detail page

## Debugging

- Check the browser console for error messages
- The extension logs success/failure messages when executing `closeAuth()`
- Background script logs can be viewed in the extension's service worker console

## Privacy & Security

This extension:
- Only runs on housescalgary.ca property detail pages
- Only calls the existing `closeAuth()` function
- Does not collect or transmit any data
- Does not modify any website content beyond closing the auth dialog

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
