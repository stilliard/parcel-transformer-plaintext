
# Plaintext transformer for Parcel: *parcel-transformer-plaintext*

Simple plugin for parcel to skip plaintext includes/scripts. 

Think of this as a dummy transformer, such as scripts wrapped as type="text/plain" for cookie popups and other similar use cases.

## Install

```
npm install parcel-transformer-plaintext --save-dev
```

Then add the transformer to your `.parcelrc` file like so:
```json
{
    "extends": "@parcel/config-default",
    "transformers": {
        "*.plain": ["parcel-transformer-plaintext", "..."]
    }
}
```
