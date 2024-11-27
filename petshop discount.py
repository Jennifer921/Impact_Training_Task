
def estimate_discount(membership,cost):
    if(membership == "premium"):
        discount = cost * 0.20
        bill = cost - discount
    elif(membership == "gold"):
        discount = cost * 0.15
        bill = cost - discount
    elif(membership == "silver"):
        discount = cost * 0.10
        bill = cost - discount
    elif(cost>2000):
        discount = cost * 0.05
        bill = cost - discount
    
    else:
     bill =cost
    return bill
membership = input("enter membership card name:")
cost = float(input("enter bill:"))
bill = estimate_discount(membership,cost)
print(f"You can pay just Rs.{bill}")
