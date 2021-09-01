## Table Tag
  - 데이터를 담은 표를 만들 때 사용
  - 기본원리
    ```html
    <table>
        <tr>
            <th> 테이블 헤더 </th>
            <td> 테이블 데이터 </td>
        </tr>
    </table>
    ```
    ```html
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>이름</th>
                <th>취미</th>
                <th>기타</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>plu457</th>
                <th>Pulan</th>
                <th>코딩</th>
                <th> 없으면 빈칸 </th>
            </tr>
            <tr>
                <th>plu</th>
                <th>cola</th>
                <th> 없으면 빈칸 </th>
                <th> 없으면 빈칸 </th>
            </tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
    ```
  - 활용
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>테이블 활용</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">월</th>
                    <th scope="col">화</th>
                    <th scope="col">수</th>
                    <th scope="col">목</th>
                    <th scope="col">금</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1교시</th>
                    <td rowspan="2">수학</td>
                    <td>자습</td>
                    <td rowspan="2">영어</td>
                    <td>자습</td>
                    <td rowspan="2">물리학</td>
                </tr>
                <tr>
                    <th scope="row">2교시</th>
                    <td rowspan="2">국어</td>
                    <td rowspan="2">생명</td>
                </tr>
                <tr>
                    <th scope="row">3교시</th>
                    <td>지구과학</td>
                    <td>생명과학</td>
                    <td>자습</td>
                </tr>
                <tr>
                    <th colspan="6" scope="row">점심시간</th>
                </tr>
                <tr>
                    <th scope="row">4교시</th>
                   <td>독서</td>
                    <td rowspan="2">보충</td>
                   <td rowspan="2">창체</td>
                    <td rowspan="2">자습</td>
                    <td>수학</td>
                    <tr>
                    <th scope="row">5교시</th>
                    <td>국어</td>
                    <td>자습</td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
    ```
    <hr>
    <img src="https://user-images.githubusercontent.com/53371165/112317082-0ee6a100-8cef-11eb-92ca-d492611b5285.png">
