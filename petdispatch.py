
def transport_mode(priority , weight,distance):
    if priority == "no" and weight <=5 :
        return "Bike"
    elif priority == "no" and weight > 5 and distance <= 250 :
        return "lorry"
    elif  priority == "yes" and distance < 50 and weight < 100 :
        return "van"
    else:
        return "Train"

priority = input("Is it urgent? ")
weight = int(input("Enter weight: "))
distance = int(input("How much km? "))
print(transport_mode(priority , weight,distance))