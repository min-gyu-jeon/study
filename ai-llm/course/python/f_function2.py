# 성적 관리 프로그램

# - 국어, 영어, 수학 점수
# - 점수는 0 ~ 100점
# - 세 점수 입력받아 총점, 평균, 등급 계산
# - 등급 기준 : 90 ~ 100 A, 80 ~89 B, 70~79 C, 60~69 D, 0~59 F
# - 평균, 등급 출력
# - 메뉴 시스템을 사용하여 사용자가 원할 때까지 반복

while True:
    print("*" * 30)
    print("*1. 성적 처리")
    print("*2. 종료")
    print("*" * 30)

    task = input("원하는 작업을 선택하세요: ")
    print()

    if task == '1':
        kor = int(input("국어 점수 :"))
        eng = int(input("영어 점수: "))
        math = int(input("수학 점수: "))
        tot = kor + eng + math
        avg = tot / 3
        if 90 <= avg:
            grade = 'A'
        elif 80 <= avg:
            grade = 'B'
        elif 70 <= avg:
            grade = 'C'
        elif 60 <= avg:
            grade = 'D'
        else:
            grade = 'F'
        print(f"[평균 : {avg:.2f}][등급 : {grade}]")
        pass
    elif task == '2':
        print("프로그램을 종료합니다.")
        break
    else:
        print('지원하지 않는 작업입니다.')
    
    print()