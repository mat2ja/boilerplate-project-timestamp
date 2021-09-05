

### [Heroku deploy](https://timestamp-service-freecodecamp.herokuapp.com/)

### Endpoints

- `/api` - get current date
- `/api/:unix_timestamp` - get by unix timestamp
- `/api/:date` - get by date string ('YYYY-MM-DD')
  

### Example usage
- [`/api`](https://timestamp-service-freecodecamp.herokuapp.com/api)
- [`/api/1608854400000`](https://timestamp-service-freecodecamp.herokuapp.com/api/1608854400000)
- [`/api/2020-12-25`](https://timestamp-service-freecodecamp.herokuapp.com/api/2020-12-25)

### Example output
```json
{
    "unix": 1608854400000, 
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
