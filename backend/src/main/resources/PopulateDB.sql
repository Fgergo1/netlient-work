
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS database_users;


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    article_number INT,
    name TEXT NOT NULL,
    net_cost INT,
    VAT INT
);

CREATE TABLE database_users (
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL ,
    password TEXT NOT NULL
);

INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (1, '122123', 'pillow', 200, 13);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (2, '122124', 'lamp', 150, 20);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (3, '122125', 'ball', 100, 15);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (4, '122126', 'umbrella', 70, 4);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (5, '122127', 'toy car', 120, 7);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (6, '122128', 'desk', 250, 18);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (7, '122129', 'chair', 180, 15);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (8, '122130', 'rug', 300, 10);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (9, '122131', 'clock', 90, 8);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (10, '122132', 'mirror', 130, 12);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (11, '122133', 'bookshelf', 350, 22);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (12, '122134', 'couch', 700, 25);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (13, '122135', 'table', 400, 18);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (14, '122136', 'kettle', 60, 5);
INSERT INTO products (id, article_number, name, net_cost, VAT) VALUES (15, '122137', 'blender', 80, 6);



INSERT INTO database_users (id, user_name, password) VALUES (1,'test', 'test');

