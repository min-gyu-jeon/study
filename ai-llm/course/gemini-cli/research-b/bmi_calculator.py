import sys

print("=== BMI(체질량지수) 계산기 ===")

try:
    # 사용자 입력 받기
    weight_input = input("몸무게를 입력하세요 (kg): ")
    height_input = input("키를 입력하세요 (cm): ")
    
    # int으로 받은 데이터는 문자열이므로 입력값을 숫자 변환
    weight = float(weight_input)
    height = float(height_input)
    
    # 유효성 검사
    if weight <= 0 or height <= 0:
        print("\n오류: 몸무게와 키는 0보다 커야 합니다.")
    else:
        # BMI 계산 (키 cm를 m로 변환: height / 100)
        bmi = weight / ((height / 100) ** 2)
        
        # 비만도 분류
        if bmi < 18.5:
            classification = "저체중 (Underweight)"
        elif 18.5 <= bmi < 25:
            classification = "정상 (Normal)"
        elif 25 <= bmi < 30:
            classification = "과체중 (Overweight)"
        else:
            classification = "비만 (Obese)"
            
        # 결과 출력
        print(f"\n계산 결과:")
        print(f"- 당신의 BMI 지수: {bmi:.2f}")
        print(f"- 비만도 결과: {classification}")
        
except ValueError:
    print("\n오류: 숫자만 입력 가능합니다.")
except KeyboardInterrupt:
    print("\n프로그램을 종료합니다.")
except Exception as e:
    print(f"\n예기치 못한 오류가 발생했습니다: {e}")
