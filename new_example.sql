create table customer(
    id serial primary key,
    name varchar(255),
    phone varchar(255),
    email varchar(255));
create table product(
    id serial primary key,
    name varchar(255),
    description text,
    price integer);
create table product_photo(
    id serial primary key,
    url varchar(255),
    product_id integer references product(id));
create table cart(
    customer_id integer references customer(id),
    id serial primary key);
create table cart_product(
    cart_id integer references cart(id),
    product_id integer references product(id));

--  data

insert into customer(name, phone, email) values ('stepan', '04', 'eses@gmail.com');
insert into customer(name, phone, email) values ('ivan', '014', 'van@gmail.com');
insert into product (name, description, price) values ('Megumin', 'mini', 1);
insert into product (name, description, price) values ('Aqua', 'mid', 20);
insert into product (name, description, price) values ('Darkness', 'mega', 107);
insert into product_photo (url, product_id) values ('megumin_url', 1);
insert into product_photo (url, product_id) values ('aqua_url', 2);
insert into product_photo (url, product_id) values ('darkness_url', 3);
insert into cart (customer_id) values (1);
insert into cart_product (cart_id, product_id) values (1, 1), (1, 2);
insert into cart (customer_id) values (2);
insert into cart_product (cart_id, product_id) values (2, 3);
    