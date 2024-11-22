SELECT * FROM product.product_table;
USE product;
select * from product;

-- adding date
alter  table product_table
add column purchase_date date;

update product_table set purchase_date="2021-12-21" where productID = 101;
update product_table set purchase_date="2021-05-20" where productID = 102;
update product_table set purchase_date="2024-01-30" where productID = 103;
update product_table set purchase_date="2023-12-22" where productID = 104;
update product_table set purchase_date="2024-01-17" where productID = 105;
update product_table set purchase_date="2021-03-15" where productID = 106;
update product_table set purchase_date="2023-11-12" where productID = 107;

delimiter $$
create procedure show_name_expyear(IN exp_results numeric)
begin
select * from product_table where year(purchase_date) = exp_results;
end $$
delimiter ;

call show_name_expyear(2022);
drop procedure show_name_expyear;

create table employee(
empID INT NOT NULL,empName VARCHAR(40),empDept VARCHAR(40),PRIMARY KEY(empID)
);
