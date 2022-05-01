# Opaque Identifier Generator

## Abstract

Randomly generating unique opaque identifiers is a common problem that this library proposes to solve with sane defaults for the local and global contexts.


## Local Identifiers Generation

Calculating the probability of collision in a set of n possible values is known as the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem).

With a length of 20 characters picked at random from an alphabet of 62 symbols (a-zA-Z0-9), at a pace of 1,000,000 identifiers generated per second, it would take 4,000 years to reach a 1% collision probability.

This library settled for generating local identifiers composed of 20 characters randomly picked among 62 symbols (a-zA-Z0-9) using crypto.


## Global Identifiers Generation

A [Uniform Resource Identifier](https://datatracker.ietf.org/doc/html/rfc3986) (URI) is a compact sequence of characters that identifies an abstract or physical resource.

A URI can be: a [Uniform Resource Locator](https://datatracker.ietf.org/doc/html/rfc1738) (URL), providing a means of locating the resource by describing its primary access mechanism, for example, an HTTP URI; a [Uniform Resource Name](https://datatracker.ietf.org/doc/html/rfc2141) (URN) serving as a persistent, location-independent, resource identifiers; or both.

### UUID

A [Universally Unique Identifier](https://datatracker.ietf.org/doc/html/rfc4122) (UUID) is 128-bits long and can guarantee uniqueness across space and time.

UUIDs don't require a registration process to be unique, making them very low minting-cost URNs (other URN namespaces such as, for example, [ISBN](https://datatracker.ietf.org/doc/html/rfc3187#section-5) rely on a registration process).

The `uuid` [URN Namespace Identifier](https://datatracker.ietf.org/doc/html/rfc2141#section-2) has been [described](https://datatracker.ietf.org/doc/html/rfc4122#section-3) and [registered](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml) following [due process](https://datatracker.ietf.org/doc/html/rfc8141#section-6), hence `urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6` is the valid URN representation of UUID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`.


### URL

Provided a base URL, one can concatenate a local identifier to obtain a globally unique identifier.


### RDF Node

A [NamedNode](http://rdf.js.org/data-model-spec/#namednode-interface) is the standard RDF/JS abstraction for [RDF IRI nodes](https://www.w3.org/TR/rdf11-concepts/#section-IRIs).


## How to?

### Generate a local identifier

```javascript
import { id } from "crypg";

id();
```


### Generate a UUID

```javascript
import { uuid } from "crypg";

uuid();
```


### Generate a UUID URN

```javascript
import { urn } from "crypg";

urn();
```


### Generate a URL

```javascript
import { url } from "crypg";

// Returns a URL with base https://example.org/
url();

// Returns a URL with base https://example.com/
url("https://example.com")
```


### Generate a NamedNode

```javascript
import { namednode } from "crypg";

// Returns a NamedNode with base URL https://example.org/ for its value
namednode("https://example.com");

// Returns a NamedNode that is a UUID URN
namednode();
```
