# Identifier

Opaque identifier generation.

## Abstract

Randomly generating unique opaque identifiers is a common problem that this library proposes to solve with a sane default for the local and global contexts.

### Local identifier

Calculating the probability of collision in a set of n possible values is known as the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem).

With an ID length of 20 characters picked at random from an alphabet of 62 symbols (a-zA-Z0-9), at a pace of 1,000,000 IDs generated per second, it would take 4,000 years to reach a 1% collision probability.


### Global identifier

A [Universally unique identifier](https://datatracker.ietf.org/doc/html/rfc4122) (UUID) is 128-bits long and can guarantee uniqueness across space and time. UUIDs don't require a registration process to be unique, therefore a UUID is a very low minting-cost [Uniform Resource Name](https://datatracker.ietf.org/doc/html/rfc2141) (URN).

The `uuid` [URN Namespace Identifier](https://datatracker.ietf.org/doc/html/rfc2141#section-2) is [registered](https://datatracker.ietf.org/doc/html/rfc4122#section-3), hence `urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6` is the valid URN representation of UUID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`.


## How to?

Generate a local identifier: `generateLocalIdentifier()`.

Generate an URL: `generateURL(baseUrl)`.

Generate a global identifier: `generateGlobalIdentifier()`.

Generate a URN: `generateURN()`.
