# ragnarok-ecommerce

## Project progress

### Front-end
- [ ] Design ideas, UI/UX stuff
- [ ] Basic layout (nav, footer etc... except admin in panel)
- [ ] Home page
- [ ] About page
- [ ] Product template
- [ ] Check-out template
- [ ] Admin panel
  - [ ] Dashboard
  - [ ] Product editor

### Back-end
- [ ] Mongoose models
  - [ ] Order
  - [ ] Product
  - [ ] Store
  - [ ] User
  - [ ] Buyer
- [ ] Controllers
  - [ ] Order
    - [ ] Get all orders (admin only)
    - [ ] Get order by id (admin only)
    - [ ] Post order for one item
    - [ ] Post order for the list of items in the cart
  - [ ] Product
    - [ ] Get all products
    - [ ] Get product by id
    - [ ] Post new product (admin only)
    - [ ] Delete product by id (admin only)
    - [ ] Edit product by id (admin only)
  - [ ] Store
    - [ ] Get store object from db
    - [ ] Edit store object (admin only)
  - [ ] User
    - [ ] Register
    - [ ] PassportJS
      - [ ] Login (local strategy)
      - [ ] Authorization (JWT to https cookie)

<br>

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
