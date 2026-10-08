# Python 기초 · 데이터 분석 실습

Python 문법부터 문자열, 제어문, 함수, 복합 자료형, CSV 분석과 시각화까지 공부한 코드와 Jupyter 노트북입니다. 원본 파일명과 구조를 유지하고, 노트북 실행 출력만 공개 사본에서 제거했습니다.

## 학습 목차

| 주제 | 파일 |
| --- | --- |
| 첫 Python 프로그램 | [a_hello_pyhton.py](a_hello_pyhton.py) · [b_hello_python.ipynb](b_hello_python.ipynb) |
| 기본 문법 | [c_basic_syntax.ipynb](c_basic_syntax.ipynb) · [ex_python.py](ex_python.py) |
| 문자열 | [d_string.ipynb](d_string.ipynb) |
| 조건문·반복문 | [e_control_statement.ipynb](e_control_statement.ipynb) |
| 함수 | [f_function.ipynb](f_function.ipynb) · [f_function2.py](f_function2.py) · [f_function3.py](f_function3.py) |
| 리스트·튜플·딕셔너리 등 복합 자료형 | [g_complex_type.ipynb](g_complex_type.ipynb) · [g_complex_type.py](g_complex_type.py) |
| 날씨 CSV 분석·시각화 | [g_complex_type2.ipynb](g_complex_type2.ipynb) |
| 인구 CSV 분석·시각화 | [g_complex_type3.ipynb](g_complex_type3.ipynb) |
| 지하철 이용량 CSV 분석 | [g_complex_type4.ipynb](g_complex_type4.ipynb) |
| 난수·리스트·반복문 종합 실습 | [lotto.py](lotto.py) |

## 실습 데이터

노트북에서 사용하는 상대 경로를 유지하기 위해 다음 세 파일을 포함했습니다.

- [weather_data.csv](data-files/weather_data.csv): 관측 지점과 날짜별 기온 데이터
- [population.csv](data-files/population.csv): 행정구역별 성별·연령별 인구 집계
- [subway-data.csv](data-files/subway-data.csv): 날짜·역·시간대별 승하차 집계

파일은 로컬 학습 폴더의 원본 사본이며, 데이터 원출처 URL과 이용 조건은 해당 폴더에서 확인되지 않았습니다. [데이터 안내](data-files/README.md)를 참고하세요.

## 실행 안내

이 폴더를 작업 디렉터리로 사용하세요. 노트북은 `data-files/...` 상대 경로로 CSV를 읽습니다.

Python 스크립트 예시:

```bash
python lotto.py
```

노트북은 Python 환경에 Jupyter와 Matplotlib를 준비한 뒤 이 폴더에서 열어 실행합니다.

```bash
python -m pip install jupyter matplotlib
python -m jupyter notebook
```

입력을 받는 콘솔 실습은 메뉴 선택이 필요합니다. 한글 그래프 표시에는 환경에 맞는 폰트 설정이 필요할 수 있습니다. 코드는 학습 기록으로 유지하며, 이번 정리에서는 모든 셀을 재실행하거나 실행 결과를 새로 측정하지 않았습니다.

[상위 학습 목차](../../README.md) · [원본 경로와 사본 대응표](../../../docs/source-manifest.json)
