

# [FreeCodeCamp Example](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

### Endpoints

- `/api` - get current date
- `/api/:unix_timestamp` - get by unix timestamp
- `/api/:date` - get by date string ('YYYY-MM-DD')
  

### Example usage:
- [`/api`]()
- [`/api/1608854400000`]()
- [`/api/2020-12-25`]()

### Example output:
```json
{
    "unix": 1608854400000, 
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
