def calculate_bill(unit):
   if (unit > 1000):
      bill = (unit - 1000) * 10 + 500 * 5 +200 *2 + 300 *1
   elif(unit > 500):
      bill = (unit - 500) * 5 + 200 *2 + 300 *1
   elif(unit >200):
      bill = (unit - 200) * 2 +300*1
   else:
      bill = unit *1
   return bill

unit = int(input("Enter the unit consumed:"))
bill = calculate_bill(unit)
print(f'Your Current Bill is Rs.{bill}')

