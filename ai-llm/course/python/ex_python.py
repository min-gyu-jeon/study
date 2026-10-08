print("=" * 35)
print("       BMI 계산기")
print("=" * 35)

name = input("이름을 입력하세요: ")
kg = float(input("체중을 입력하세요: "))
cm = float(input("키를 입력하세요: "))
m = cm/100

#BMI 계산식
bmi = (kg)/(m**2)
bmi = round(bmi, 2)    #round() 함수는 숫자를 반올림함. 두 번째 인수 소수점 자릿수

print("=" * 35)
print(name, "님의 BMI", bmi)
print("=" * 35)