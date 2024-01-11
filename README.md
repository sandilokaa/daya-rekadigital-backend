# **Daya Rekadigital**

Ini merupakan challenge yang diberikan oleh Daya Rekadigital

## **How To Use**

  ```
  yarn install
  ```

  ```
  node models/customer.js
  ```

  ```
  node models/transaction.js
  ```

  ```
  node seeders/customerSeeder.js
  ```

## **Tech Stack**

  Penggunaan ExpressJs membantu dalam membuat sebuah server, dibantu dengan repository pattern yang memudahkan untuk melakukan debugging. MySQL dipilih karena merupakan database yang umum digunakan pada perusahaan. Untuk mengelola dependency yarn dipilih karena memiliki proses yang sedikit lebih cepat dibanding npm. Dalam pengembangan code github dan vscode untuk membantu melakukan manajemen code. Selain itu, postman digunakan untuk pengembangan dan pengujian API.


## **Endpoint**

  Berikut endpoint RESTful API serta contoh request dan hasil response.

### **Create New Transaction**

  ---

  POST

  **Example**

  ```
  http://localhost:8080/api/transaction
  ```

  **Request**

  ``` 
  {
    "customer_id": 1,
    "menu": "Nasi Goreng",
    "price": 17000,
    "qty": 2,
    "payment": "Cash"
  }
  ```

  **Response**

  ```
  {
    "status": true,
    "message": "New transaction created successfully",
    "data": {
        "transactionHandler": [
            {
                "id": 7,
                "customer_id": 1,
                "menu": "Nasi Goreng",
                "price": 17000,
                "qty": 2,
                "payment": "Cash",
                "total": 34000,
                "created_at": "2024-01-11T20:49:34.000Z"
            }
        ]
    }
  }
  ```

### **Get List Transaction**

