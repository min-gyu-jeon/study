import random

while True:
    # 조건을 만족하는 번호 세트를 찾을 때까지 반복
    while True:
        # 1~45 범위에서 중복되지 않는 숫자 6개 뽑기
        numbers = random.sample(range(1, 46), 6)   #smaple 한번에 여러개의 난수 발생 (1~46까지 6개) 
        
        # 뽑힌 숫자의 평균 계산
        total = 0    
        for num in numbers:
            total += num
        average = total / len(numbers)
        
        # 평균이 20 ~ 26 범위에 포함되는지 확인
        if 20 <= average <= 26:
            # 정렬해서 보기 좋게 출력
            numbers.sort()        #숫자 정렬
            print(f"로또 번호: {numbers}")
            print(f"평균: {average:.2f}")
            break
    
    # 계속할지 확인
    retry = input("다시 뽑으시겠습니까? (y/n): ")
    if retry.lower() != 'y':
        print("프로그램을 종료합니다.")
        break
