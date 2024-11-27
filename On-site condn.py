
def canGo_orNot(is_passport ,is_communication ,is_feedback,experience,age):
   if is_passport == "yes" and is_communication == "yes" and is_feedback == "yes" and experience >= 2 and age >= 23:
      return "Eligibile to go On_site"
   else:
      return "Not Eligibile to go On_site"

is_passport = input ("Are you having Passport?:")
is_communication = input ("Are you having good communication skill?:")
is_feedback = input ("Are you having good feedback?:")
experience = int(input("Enter experience yrs:"))
age = int(input("Enter age:"))

print(canGo_orNot(is_passport ,is_communication ,is_feedback,experience,age))
