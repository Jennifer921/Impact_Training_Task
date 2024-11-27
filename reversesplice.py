num = input("enter number:")
if num.isdigit() and len(num)==5:
    reverse = num[:: -1]
    print (reverse)
else:
    print("Invalid")
