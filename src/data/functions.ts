export interface SheetFunction {
  name: string;
  category: string;
  description: string;
  syntax: string;
  example?: string;
}

export const functions: SheetFunction[] = [
  {
      "name": "WORKDAY.INTL",
      "category": "日付",
      "description": "指定した営業日数後の日付を計算し、特定の週末や祝日を除外します。",
      "syntax": "WORKDAY.INTL(start_date, num_days, [weekend], [holidays])",
      "example": "WORKDAY.INTL(A1, 10, 1, B1:B5)"
  },
  {
      "name": "NETWORKDAYS.INTL",
      "category": "日付",
      "description": "指定した週末や祝日を除外し、2つの日付の間の営業日数を計算します。",
      "syntax": "NETWORKDAYS.INTL(開始日, 終了日, [週末], [休日])",
      "example": "NETWORKDAYS.INTL(A1, A2, 1, B1:B5)"
  },
  {
      "name": "ERF",
      "category": "エンジニアリング",
      "description": "指定された範囲でガウス誤差関数の積分を計算します。",
      "syntax": "ERF(lower_bound, [upper_bound])",
      "example": "ERF(1, 2)"
  },
  {
      "name": "IMARGUMENT",
      "category": "エンジニアリング",
      "description": "指定された複素数の偏角（ラジアン単位）を返します。",
      "syntax": "IMARGUMENT(number)",
      "example": "IMARGUMENT(\"3+4i\")"
  },
  {
      "name": "IMCOS",
      "category": "エンジニアリング",
      "description": "指定された複素数の余弦を計算します。",
      "syntax": "IMCOS(number)",
      "example": "IMCOS(\"3+4i\")"
  },
  {
      "name": "ISPMT",
      "category": "会計",
      "description": "投資の特定の期間中に支払われた利息を計算します。",
      "syntax": "ISPMT(rate, period, number_of_periods, present_value)",
      "example": "ISPMT(0.05, 1, 12, -1000)"
  },
  {
      "name": "YIELDMAT",
      "category": "会計",
      "description": "満期時に利息を支払う証券の年間利回りを計算します。",
      "syntax": "YIELDMAT(settlement, maturity, issue, rate, price, [day_count_convention])",
      "example": "YIELDMAT(A1, A2, A3, 0.05, 100, 1)"
  },
  {
      "name": "ARRAYFORMULA",
      "category": "Google",
      "description": "配列数式を使用して複数行または複数列に値を返します。",
      "syntax": "ARRAYFORMULA(配列数式)",
      "example": "ARRAYFORMULA(A1:A10 * B1:B10)"
  },
  {
      "name": "DETECTLANGUAGE",
      "category": "Google",
      "description": "指定されたテキストの言語を識別します。",
      "syntax": "DETECTLANGUAGE(テキストまたは範囲)",
      "example": "DETECTLANGUAGE(\"Bonjour\")"
  },
  {
      "name": "GOOGLEFINANCE",
      "category": "Google",
      "description": "Google Finance から現在や過去の証券情報を取得します。",
      "syntax": "GOOGLEFINANCE(銘柄, 属性, 開始日, 終了日|日数, 間隔)",
      "example": "GOOGLEFINANCE(\"GOOGL\", \"price\")"
  },
  {
      "name": "GOOGLETRANSLATE",
      "category": "Google",
      "description": "指定されたテキストを、ある言語から別の言語に翻訳します。",
      "syntax": "GOOGLETRANSLATE(テキスト, ソース言語, ターゲット言語)",
      "example": "GOOGLETRANSLATE(\"Hello\", \"en\", \"ja\")"
  },
  {
      "name": "IMAGE",
      "category": "Google",
      "description": "セル内に指定されたURLの画像を挿入します。",
      "syntax": "IMAGE(URL, モード)",
      "example": "IMAGE(\"https://example.com/image.jpg\")"
  },
  {
      "name": "QUERY",
      "category": "Google",
      "description": "Google Visualization API のクエリ言語を使用してデータに対するクエリを実行します。",
      "syntax": "QUERY(データ, クエリ, 見出し)",
      "example": "QUERY(A1:D10, \"SELECT A, B WHERE C > 100\", 1)"
  },
  {
      "name": "SPARKLINE",
      "category": "Google",
      "description": "1つのセル内にミニグラフを作成します。",
      "syntax": "SPARKLINE(データ, オプション)",
      "example": "SPARKLINE(A1:A10, {\"charttype\", \"line\"})"
  },
  {
      "name": "ISFORMULA",
      "category": "情報",
      "description": "指定されたセルに数式が含まれているかどうかを判定します。",
      "syntax": "ISFORMULA(cell)",
      "example": "ISFORMULA(A1)"
  },
  {
      "name": "XOR",
      "category": "論理",
      "description": "指定された論理式の排他的論理和（XOR）を実行し、異なる場合に1、同じ場合に0を返します。",
      "syntax": "XOR(logical_expression1, [logical_expression2, ...])",
      "example": "XOR(TRUE, FALSE, TRUE)"
  },
  {
      "name": "GETPIVOTDATA",
      "category": "参照",
      "description": "ピボットテーブルから指定した行と列の見出しに対応する集計値を取得します。",
      "syntax": "GETPIVOTDATA(値の名前, ピボットテーブルのセル, [元の列, ...], [ピボットのアイテム, ...])",
      "example": "GETPIVOTDATA(\"売上\", A1, \"地域\", \"東京\")"
  },
  {
      "name": "CSCH",
      "category": "数学",
      "description": "指定された実数の双曲線余割（ハイパーボリック・コセカント）を返します。",
      "syntax": "CSCH(value)",
      "example": "CSCH(2)"
  },
  {
      "name": "DECIMAL",
      "category": "数学",
      "description": "指定された基数の数値を10進数に変換します。",
      "syntax": "DECIMAL(value, base)",
      "example": "DECIMAL(\"1010\", 2)"
  },
  {
      "name": "FLOOR.PRECISE",
      "category": "数学",
      "description": "指定された数値を、指定の倍数または整数の最も近い下限に切り捨てます。",
      "syntax": "FLOOR.PRECISE(number, [significance])",
      "example": "FLOOR.PRECISE(12.34, 1)"
  },
  {
      "name": "IMLN",
      "category": "数学",
      "description": "複素数の自然対数（eを底とする対数）を返します。",
      "syntax": "IMLN(complex_value)",
      "example": "IMLN(\"3+4i\")"
  },
  {
      "name": "IMPOWER",
      "category": "数学",
      "description": "複素数を指定された指数で累乗した値を返します。",
      "syntax": "IMPOWER(complex_base, exponent)",
      "example": "IMPOWER(\"3+4i\", 2)"
  },
  {
      "name": "IMSQRT",
      "category": "数学",
      "description": "複素数の平方根を計算します。",
      "syntax": "IMSQRT(complex_number)",
      "example": "IMSQRT(\"3+4i\")"
  },
  {
      "name": "RANDARRAY",
      "category": "数学",
      "description": "指定された行数と列数の範囲内で、0から1の間のランダムな数値を生成します。",
      "syntax": "RANDARRAY(rows, columns)",
      "example": "RANDARRAY(3, 2)"
  },
  {
      "name": "SEC",
      "category": "数学",
      "description": "指定された角度（ラジアン単位）の正割（secant）を返します。",
      "syntax": "SEC(angle)",
      "example": "SEC(PI()/4)"
  },
  {
      "name": "SECH",
      "category": "数学",
      "description": "指定された値の双曲線正割（ハイパーボリック・セカント）を返します。",
      "syntax": "SECH(value)",
      "example": "SECH(1)"
  },
  {
      "name": "BETAINV",
      "category": "統計",
      "description": "指定された確率とパラメータに基づいて、逆ベータ累積分布関数の値を返します。",
      "syntax": "BETAINV(probability, alpha, beta, lower_bound, upper_bound)",
      "example": "BETAINV(0.5, 2, 5, 0, 1)"
  },
  {
      "name": "GAMMA.INV",
      "category": "統計",
      "description": "指定された確率およびパラメータに基づき、逆ガンマ累積分布関数の値を返します。",
      "syntax": "GAMMA.INV(probability, alpha, beta)",
      "example": "GAMMA.INV(0.5, 2, 3)"
  },
  {
      "name": "GAUSS",
      "category": "統計",
      "description": "標準正規分布において、平均からz標準偏差以内にある確率を返します。",
      "syntax": "GAUSS(z)",
      "example": "GAUSS(1.5)"
  },
  {
      "name": "PHI",
      "category": "統計",
      "description": "平均0、標準偏差1の正規分布における確率密度関数の値を返します。",
      "syntax": "PHI(x)",
      "example": "PHI(0.5)"
  },
  {
    "name": "ENCODEURL",
    "category": "ウェブ",
    "description": "テキストをURLクエリで使用できるようにエンコードします。",
    "syntax": "ENCODEURL(テキスト)",
    "example": "ENCODEURL(\"こんにちは 世界\")"
  },
  {
      "name": "HYPERLINK",
      "category": "ウェブ",
      "description": "セル内に指定されたURLへのハイパーリンクを作成します。",
      "syntax": "HYPERLINK(url, [link_label])",
      "example": "HYPERLINK(\"https://example.com\", \"クリックはこちら\")"
  },
  {
      "name": "IMPORTDATA",
      "category": "ウェブ",
      "description": "指定されたURLのデータを、.csvまたは.tsv形式でインポートします。",
      "syntax": "IMPORTDATA(url)",
      "example": "IMPORTDATA(\"https://example.com/data.csv\")"
  },
  {
      "name": "IMPORTFEED",
      "category": "ウェブ",
      "description": "指定されたRSSフィードやATOMフィードからデータをインポートします。",
      "syntax": "IMPORTFEED(url, [query], [headers], [num_items])",
      "example": "IMPORTFEED(\"https://example.com/feed.xml\")"
  },
  {
      "name": "IMPORTHTML",
      "category": "ウェブ",
      "description": "指定したHTMLページの表やリストからデータをインポートします。",
      "syntax": "IMPORTHTML(url, query, index)",
      "example": "IMPORTHTML(\"https://example.com\", \"table\", 1)"
  },
  {
      "name": "IMPORTRANGE",
      "category": "ウェブ",
      "description": "指定されたGoogleスプレッドシートからセル範囲をインポートします。",
      "syntax": "IMPORTRANGE(spreadsheet_url, range_string)",
      "example": "IMPORTRANGE(\"https://docs.google.com/spreadsheets/d/xxx\", \"シート1!A1:D10\")"
  },
  {
      "name": "IMPORTXML",
      "category": "ウェブ",
      "description": "XML、HTML、CSV、TSV、RSSフィードなどの構造化データからデータをインポートします。",
      "syntax": "IMPORTXML(url, xpath_query)",
      "example": "IMPORTXML(\"https://example.com\", \"//title\")"
  },
  {
      "name": "ISURL",
      "category": "ウェブ",
      "description": "指定された値が有効なURLであるかどうかを判定します。",
      "syntax": "ISURL(value)",
      "example": "ISURL(\"https://example.com\")"
  },
  {
      "name": "BIN2DEC",
      "category": "エンジニアリング",
      "description": "符号付き2進数を10進数に変換します。",
      "syntax": "BIN2DEC(符号付き2進数)",
      "example": "BIN2DEC(\"1101\")"
  },
  {
      "name": "BIN2HEX",
      "category": "エンジニアリング",
      "description": "符号付き2進数を指定された桁数の符号付き16進数に変換します。",
      "syntax": "BIN2HEX(符号付き2進数, 有効桁)",
      "example": "BIN2HEX(\"1101\", 4)"
  },
  {
    "name": "BIN2OCT",
    "category": "エンジニアリング",
    "description": "符号付き2進数を符号付き8進数に変換します。",
    "syntax": "BIN2OCT(符号付き2進数, 有効桁)",
    "example": "BIN2OCT(\"1101\", 4)"
  },
  {
      "name": "DEC2BIN",
      "category": "エンジニアリング",
      "description": "10進数を符号付き2進数に変換します。",
      "syntax": "DEC2BIN(10進数, 有効桁)",
      "example": "DEC2BIN(13, 8)"
  },
  {
      "name": "DEC2HEX",
      "category": "エンジニアリング",
      "description": "10進数を符号付き16進数に変換します。",
      "syntax": "DEC2HEX(10進数, [有効桁])",
      "example": "DEC2HEX(255, 4)"
  },
  {
      "name": "DEC2OCT",
      "category": "エンジニアリング",
      "description": "10進数を符号付き8進数に変換します。",
      "syntax": "DEC2OCT(10進数, 有効桁)",
      "example": "DEC2OCT(100, 4)"
  },
  {
      "name": "HEX2BIN",
      "category": "エンジニアリング",
      "description": "符号付き16進数を符号付き2進数に変換します。",
      "syntax": "HEX2BIN(符号付き16進数, [有効桁])",
      "example": "HEX2BIN(\"F\", 8)"
  },
  {
      "name": "HEX2DEC",
      "category": "エンジニアリング",
      "description": "符号付き16進数を10進数に変換します。",
      "syntax": "HEX2DEC(符号付き16進数)",
      "example": "HEX2DEC(\"FF\")"
  },
  {
      "name": "HEX2OCT",
      "category": "エンジニアリング",
      "description": "符号付き16進数を符号付き8進数に変換します。",
      "syntax": "HEX2OCT(符号付き16進数, 有効桁)",
      "example": "HEX2OCT(\"1A\", 4)"
  },
  {
      "name": "OCT2BIN",
      "category": "エンジニアリング",
      "description": "符号付き8進数を符号付き2進数に変換します。",
      "syntax": "OCT2BIN(符号付き8進数, 有効桁)",
      "example": "OCT2BIN(\"17\", 8)"
  },
  {
      "name": "OCT2DEC",
      "category": "エンジニアリング",
      "description": "符号付き8進数を10進数に変換します。",
      "syntax": "OCT2DEC(符号付き8進数)",
      "example": "OCT2DEC(\"77\")"
  },
  {
      "name": "OCT2HEX",
      "category": "エンジニアリング",
      "description": "符号付き8進数を符号付き16進数に変換します。",
      "syntax": "OCT2HEX(符号付き8進数, [有効桁])",
      "example": "OCT2HEX(\"77\", 4)"
  },
  {
    "name": "BITAND",
    "category": "エンジニアリング",
    "description": "2つの数値のブール型 AND 演算をビット単位で実行した結果を返します。",
    "syntax": "BITAND(値1, 値2)",
    "example": "BITAND(5, 3)"
  },
  {
      "name": "BITLSHIFT",
      "category": "エンジニアリング",
      "description": "入力値のビットを指定した桁数だけ左へシフトします。",
      "syntax": "BITLSHIFT(値, シフト数)",
      "example": "BITLSHIFT(5, 2)"
  },
  {
      "name": "BITOR",
      "category": "エンジニアリング",
      "description": "2つの数値に対しビット単位のブール型 OR 演算を実行した結果を返します。",
      "syntax": "BITOR(値1, 値2)",
      "example": "BITOR(5, 3)"
  },
  {
      "name": "BITRSHIFT",
      "category": "エンジニアリング",
      "description": "入力値のビットを特定の桁数だけ右へシフトします。",
      "syntax": "BITRSHIFT(値, シフト数)",
      "example": "BITRSHIFT(20, 2)"
  },
  {
      "name": "BITXOR",
      "category": "エンジニアリング",
      "description": "2つの数値に対しビット単位の XOR 演算（排他的論理和）を実行した結果を返します。",
      "syntax": "BITXOR(値1, 値2)",
      "example": "BITXOR(5, 3)"
  },
  {
      "name": "COMPLEX",
      "category": "エンジニアリング",
      "description": "指定された実部と虚部から複素数を生成します。",
      "syntax": "COMPLEX(実部, 虚部, [サフィックス])",
      "example": "COMPLEX(3, 4, \"i\")"
  },
  {
      "name": "DELTA",
      "category": "エンジニアリング",
      "description": "2つの数値を比較して、等しければ1、異なれば0を返します。",
      "syntax": "DELTA(数値1, [数値2])",
      "example": "DELTA(5, 5)"
  },
  {
      "name": "ERF.PRECISE",
      "category": "エンジニアリング",
      "description": "指定された範囲でガウス誤差関数の積分を計算します。",
      "syntax": "ERF.PRECISE(下限, [上限])",
      "example": "ERF.PRECISE(1, 2)"
  },
  {
      "name": "GESTEP",
      "category": "エンジニアリング",
      "description": "値が指定したしきい値より大きい場合は1を返し、それ以外は0を返します。",
      "syntax": "GESTEP(値, [しきい値])",
      "example": "GESTEP(5, 3)"
  },
  {
      "name": "IMABS",
      "category": "エンジニアリング",
      "description": "複素数の絶対値（大きさ）を返します。",
      "syntax": "IMABS(数値)",
      "example": "IMABS(\"3+4i\")"
  },
  {
      "name": "IMAGINARY",
      "category": "エンジニアリング",
      "description": "指定された複素数の虚部を返します。",
      "syntax": "IMAGINARY(複素数)",
      "example": "IMAGINARY(\"3+4i\")"
  },
  {
      "name": "IMCONJUGATE",
      "category": "エンジニアリング",
      "description": "指定された複素数の複素共役を返します。",
      "syntax": "IMCONJUGATE(数値)",
      "example": "IMCONJUGATE(\"3+4i\")"
  },
  {
      "name": "IMCOSH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線余弦を返します。",
      "syntax": "IMCOSH(数値)",
      "example": "IMCOSH(\"3+4i\")"
  },
  {
      "name": "IMCOT",
      "category": "エンジニアリング",
      "description": "指定された複素数のコタンジェントを返します。",
      "syntax": "IMCOT(数値)",
      "example": "IMCOT(\"3+4i\")"
  },
  {
      "name": "IMCOTH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線コタンジェントを返します。",
      "syntax": "IMCOTH(数値)",
      "example": "IMCOTH(\"3+4i\")"
  },
  {
      "name": "IMCSC",
      "category": "エンジニアリング",
      "description": "指定された複素数のコセカントを返します。",
      "syntax": "IMCSC(数値)",
      "example": "IMCSC(\"3+4i\")"
  },
  {
      "name": "IMCSCH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線コセカントを返します。",
      "syntax": "IMCSCH(数値)",
      "example": "IMCSCH(\"3+4i\")"
  },
  {
      "name": "IMDIV",
      "category": "エンジニアリング",
      "description": "ある複素数を別の複素数で割った結果を返します。",
      "syntax": "IMDIV(被除数, 除数)",
      "example": "IMDIV(\"3+4i\", \"1-2i\")"
  },
  {
      "name": "IMEXP",
      "category": "エンジニアリング",
      "description": "オイラー数 e（約2.718）を底とする複素数べき乗を返します。",
      "syntax": "IMEXP(指数)",
      "example": "IMEXP(\"3+4i\")"
  },
  {
      "name": "IMLOG",
      "category": "エンジニアリング",
      "description": "指定された値を底とする複素数の対数を返します。",
      "syntax": "IMLOG(値, 底)",
      "example": "IMLOG(\"3+4i\", 10)"
  },
  {
      "name": "IMLOG10",
      "category": "エンジニアリング",
      "description": "10を底とする複素数の対数を返します。",
      "syntax": "IMLOG10(値)",
      "example": "IMLOG10(\"3+4i\")"
  },
  {
      "name": "IMLOG2",
      "category": "エンジニアリング",
      "description": "2を底とする複素数の対数を返します。",
      "syntax": "IMLOG2(値)",
      "example": "IMLOG2(\"3+4i\")"
  },
  {
      "name": "IMPRODUCT",
      "category": "エンジニアリング",
      "description": "一連の複素数を乗算して積を返します。",
      "syntax": "IMPRODUCT(因数1, [因数2, ...])",
      "example": "IMPRODUCT(\"3+4i\", \"1-2i\")"
  },
  {
      "name": "IMREAL",
      "category": "エンジニアリング",
      "description": "指定された複素数の実部を返します。",
      "syntax": "IMREAL(複素数)",
      "example": "IMREAL(\"3+4i\")"
  },
  {
      "name": "IMSEC",
      "category": "エンジニアリング",
      "description": "指定された複素数のセカント（正割）を返します。",
      "syntax": "IMSEC(数値)",
      "example": "IMSEC(\"3+4i\")"
  },
  {
      "name": "IMSECH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線セカントを返します。",
      "syntax": "IMSECH(数値)",
      "example": "IMSECH(\"3+4i\")"
  },
  {
      "name": "IMSIN",
      "category": "エンジニアリング",
      "description": "指定された複素数のサイン（正弦）を返します。",
      "syntax": "IMSIN(数値)",
      "example": "IMSIN(\"3+4i\")"
  },
  {
      "name": "IMSINH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線正弦を返します。",
      "syntax": "IMSINH(数値)",
      "example": "IMSINH(\"3+4i\")"
  },
  {
      "name": "IMSUB",
      "category": "エンジニアリング",
      "description": "2つの複素数の差を返します。",
      "syntax": "IMSUB(複素数1, 複素数2)",
      "example": "IMSUB(\"3+4i\", \"1-2i\")"
  },
  {
      "name": "IMSUM",
      "category": "エンジニアリング",
      "description": "一連の複素数の合計を返します。",
      "syntax": "IMSUM(値1, [値2, ...])",
      "example": "IMSUM(\"3+4i\", \"1-2i\", \"5+6i\")"
  },
  {
      "name": "IMTAN",
      "category": "エンジニアリング",
      "description": "指定された複素数のタンジェント（正接）を返します。",
      "syntax": "IMTAN(数値)",
      "example": "IMTAN(\"3+4i\")"
  },
  {
      "name": "IMTANH",
      "category": "エンジニアリング",
      "description": "指定された複素数の双曲線正接を返します。",
      "syntax": "IMTANH(数値)",
      "example": "IMTANH(\"3+4i\")"
  },
  {
      "name": "DAVERAGE",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値の平均値を返します。",
      "syntax": "DAVERAGE(データベース, フィールド, 条件)",
      "example": "DAVERAGE(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DCOUNT",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した数値の個数をカウントします。",
      "syntax": "DCOUNT(データベース, フィールド, 条件)",
      "example": "DCOUNT(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DCOUNTA",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値（テキストを含む）の個数をカウントします。",
      "syntax": "DCOUNTA(データベース, フィールド, 条件)",
      "example": "DCOUNTA(A1:D10, \"商品名\", F1:F2)"
  },
  {
      "name": "DGET",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から単一の値を返します。",
      "syntax": "DGET(データベース, フィールド, 条件)",
      "example": "DGET(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DMAX",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値の最大値を返します。",
      "syntax": "DMAX(データベース, フィールド, 条件)",
      "example": "DMAX(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DMIN",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値の最小値を返します。",
      "syntax": "DMIN(データベース, フィールド, 条件)",
      "example": "DMIN(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DPRODUCT",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値の積を返します。",
      "syntax": "DPRODUCT(データベース, フィールド, 条件)",
      "example": "DPRODUCT(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DSTDEV",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した母集団の標本の標準偏差を返します。",
      "syntax": "DSTDEV(データベース, フィールド, 条件)",
      "example": "DSTDEV(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DSTDEVP",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した母集団全体の標準偏差を返します。",
      "syntax": "DSTDEVP(データベース, フィールド, 条件)",
      "example": "DSTDEVP(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DSUM",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した値の合計を返します。",
      "syntax": "DSUM(データベース, フィールド, 条件)",
      "example": "DSUM(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DVAR",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した母集団の標本の分散を返します。",
      "syntax": "DVAR(データベース, フィールド, 条件)",
      "example": "DVAR(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "DVARP",
      "category": "データベース",
      "description": "SQL に似たクエリを使用して、データベースの表形式の配列または範囲から選択した母集団全体の分散を返します。",
      "syntax": "DVARP(データベース, フィールド, 条件)",
      "example": "DVARP(A1:D10, \"売上\", F1:F2)"
  },
  {
      "name": "ARABIC",
      "category": "テキスト",
      "description": "ローマ数字の値を計算してアラビア数字に変換します。",
      "syntax": "ARABIC(ローマ数字)",
      "example": "ARABIC(\"XIV\")"
  },
  {
      "name": "CHAR",
      "category": "テキスト",
      "description": "現在のユニコード表に従って、数値を文字に変換します。",
      "syntax": "CHAR(表の番号)",
      "example": "CHAR(65)"
  },
  {
      "name": "CODE",
      "category": "テキスト",
      "description": "指定した文字列の先頭文字に対応するユニコード表の数値を返します。",
      "syntax": "CODE(文字列)",
      "example": "CODE(\"A\")"
  },
  {
      "name": "CONCATENATE",
      "category": "テキスト",
      "description": "複数の文字列を結合して1つの文字列にします。",
      "syntax": "CONCATENATE(文字列1, 文字列2)",
      "example": "CONCATENATE(\"Hello\", \" World\")"
  },
  {
      "name": "EXACT",
      "category": "テキスト",
      "description": "2つの文字列が完全に同一かどうかを検証します。",
      "syntax": "EXACT(文字列1, 文字列2)",
      "example": "EXACT(\"test\", \"Test\")"
  },
  {
      "name": "FIND",
      "category": "テキスト",
      "description": "指定した文字列がテキスト内で最初に現れる位置を返します。",
      "syntax": "FIND(検索文字列, 検索対象のテキスト, 開始位置)",
      "example": "FIND(\"apple\", \"pineapple\")"
  },
  {
      "name": "FIXED",
      "category": "テキスト",
      "description": "数値を指定した小数点以下の桁数に変換します。",
      "syntax": "FIXED(数値, 小数点以下の桁数, 桁区切りなし)",
      "example": "FIXED(1234.567, 2, TRUE)"
  },
  {
      "name": "JOIN",
      "category": "テキスト",
      "description": "指定した区切り文字を使用して、1つ以上の1次元配列の要素を結合します。",
      "syntax": "JOIN(区切り文字, 値または配列1, 値または配列2)",
      "example": "JOIN(\", \", A1:A5)"
  },
  {
      "name": "LEFT",
      "category": "テキスト",
      "description": "指定した文字列の先頭から部分文字列を返します。",
      "syntax": "LEFT(文字列, 文字数)",
      "example": "LEFT(\"Hello World\", 5)"
  },
  {
      "name": "LEN",
      "category": "テキスト",
      "description": "指定した文字列の長さを返します。",
      "syntax": "LEN(テキスト)",
      "example": "LEN(\"Hello\")"
  },
  {
      "name": "LOWER",
      "category": "テキスト",
      "description": "指定した文字列を小文字に変換します。",
      "syntax": "LOWER(テキスト)",
      "example": "LOWER(\"HELLO WORLD\")"
  },
  {
      "name": "MID",
      "category": "テキスト",
      "description": "指定した文字列の指定位置から部分文字列を返します。",
      "syntax": "MID(文字列, 開始位置, セグメントの長さ)",
      "example": "MID(\"Hello World\", 7, 5)"
  },
  {
      "name": "PROPER",
      "category": "テキスト",
      "description": "指定した文字列内の各単語の最初の文字を大文字に変換します。",
      "syntax": "PROPER(大文字変換するテキスト)",
      "example": "PROPER(\"hello world\")"
  },
  {
      "name": "REGEXEXTRACT",
      "category": "テキスト",
      "description": "正規表現に従って、一致する部分文字列を取り出します。",
      "syntax": "REGEXEXTRACT(テキスト, 正規表現)",
      "example": "REGEXEXTRACT(\"abc123xyz\", \"[0-9]+\")"
  },
  {
      "name": "REGEXMATCH",
      "category": "テキスト",
      "description": "正規表現に一致するテキストの一部を検索します。",
      "syntax": "REGEXMATCH(テキスト, 正規表現)",
      "example": "REGEXMATCH(\"hello123\", \"[0-9]+\")"
  },
  {
      "name": "REGEXREPLACE",
      "category": "テキスト",
      "description": "正規表現を使用して、テキスト文字列の一部を別のテキスト文字列に置き換えます。",
      "syntax": "REGEXREPLACE(テキスト, 正規表現, 置換)",
      "example": "REGEXREPLACE(\"hello123\", \"[0-9]+\", \"\")"
  },
  {
      "name": "REPLACE",
      "category": "テキスト",
      "description": "テキスト文字列の一部を指定した新しいテキストに置き換えます。",
      "syntax": "REPLACE(テキスト, 位置, 長さ, 新規テキスト)",
      "example": "REPLACE(\"Google Sheets\", 8, 6, \"Docs\")"
  },
  {
      "name": "REPT",
      "category": "テキスト",
      "description": "指定した回数だけテキストを繰り返して表示します。",
      "syntax": "REPT(繰り返すテキスト, 繰り返し回数)",
      "example": "REPT(\"Hello\", 3)"
  },
  {
      "name": "RIGHT",
      "category": "テキスト",
      "description": "指定した文字列の末尾から部分文字列を返します。",
      "syntax": "RIGHT(文字列, 文字数)",
      "example": "RIGHT(\"Hello World\", 5)"
  },
  {
      "name": "ROMAN",
      "category": "テキスト",
      "description": "数値をローマ数字に変換します。",
      "syntax": "ROMAN(数値, 規則の簡略度)",
      "example": "ROMAN(2024, 0)"
  },
  {
      "name": "SEARCH",
      "category": "テキスト",
      "description": "特定の文字列がテキスト内で最初に現れる位置を返します。",
      "syntax": "SEARCH(検索文字列, 検索対象のテキスト, 開始位置)",
      "example": "SEARCH(\"apple\", \"pineapple\")"
  },
  {
      "name": "SUBSTITUTE",
      "category": "テキスト",
      "description": "文字列内の既存のテキストを新しいテキストに置き換えます。",
      "syntax": "SUBSTITUTE(検索対象のテキスト, 検索, 置換, 出現回数)",
      "example": "SUBSTITUTE(\"Hello World\", \"World\", \"Sheets\")"
  },
  {
      "name": "T",
      "category": "テキスト",
      "description": "文字列引数をテキストとして返します。",
      "syntax": "T(値)",
      "example": "T(123)"
  },
  {
      "name": "TEXT",
      "category": "テキスト",
      "description": "指定した表示形式に従って、数値をテキストに変換します。",
      "syntax": "TEXT(数値, 表示形式)",
      "example": "TEXT(1234.567, \"0.00\")"
  },
  {
      "name": "TRIM",
      "category": "テキスト",
      "description": "指定した文字列内の先頭と末尾のスペースを削除します。",
      "syntax": "TRIM(テキスト)",
      "example": "TRIM(\"  Hello World  \")"
  },
  {
      "name": "UPPER",
      "category": "テキスト",
      "description": "指定した文字列を大文字に変換します。",
      "syntax": "UPPER(テキスト)",
      "example": "UPPER(\"hello world\")"
  },
  {
      "name": "VALUE",
      "category": "テキスト",
      "description": "Google スプレッドシートで認識される日付、時刻、番号の書式の文字列を数値に変換します。",
      "syntax": "VALUE(テキスト)",
      "example": "VALUE(\"1234\")"
  },
  {
      "name": "YEN",
      "category": "テキスト",
      "description": "数値を現地の通貨（日本円）に変換します。",
      "syntax": "YEN(数値, 小数点以下の桁数)",
      "example": "YEN(1234.567, 0)"
  },
  {
      "name": "ASC",
      "category": "テキスト",
      "description": "全角の ASCII 文字とカタカナ文字を半角文字に変換します。",
      "syntax": "ASC(文字列)",
      "example": "ASC(\"ＡＢＣ１２３\")"
  },
  {
      "name": "CLEAN",
      "category": "テキスト",
      "description": "印刷不可能な ASCII 文字を削除したテキストを返します。",
      "syntax": "CLEAN(テキスト)",
      "example": "CLEAN(A1)"
  },
  {
      "name": "FINDB",
      "category": "テキスト",
      "description": "全角文字を2バイトとして数え、テキスト内で文字列が最初に見つかった位置を返します。",
      "syntax": "FINDB(検索文字列, 検索対象のテキスト, [開始位置])",
      "example": "FINDB(\"りんご\", \"私はりんごを食べました\")"
  },
  {
      "name": "LEFTB",
      "category": "テキスト",
      "description": "文字列の左側から、指定されたバイト数分の文字を返します。",
      "syntax": "LEFTB(文字列, バイト数)",
      "example": "LEFTB(\"こんにちは\", 4)"
  },
  {
      "name": "LENB",
      "category": "テキスト",
      "description": "文字列の長さをバイト数で返します。",
      "syntax": "LENB(文字列)",
      "example": "LENB(\"こんにちは\")"
  },
  {
      "name": "MIDB",
      "category": "テキスト",
      "description": "文字列の特定の文字の位置から、指定されたバイト数分の文字を返します。",
      "syntax": "MIDB(文字列, 開始位置, バイト数)",
      "example": "MIDB(\"こんにちは世界\", 3, 4)"
  },
  {
      "name": "REPLACEB",
      "category": "テキスト",
      "description": "テキスト文字列中の指定されたバイト数の文字を別のテキスト文字列に置き換えます。",
      "syntax": "REPLACEB(テキスト, 位置, バイト数, 新規テキスト)",
      "example": "REPLACEB(\"こんにちは\", 3, 4, \"さようなら\")"
  },
  {
      "name": "RIGHTB",
      "category": "テキスト",
      "description": "文字列の右側から、指定されたバイト数分の文字を返します。",
      "syntax": "RIGHTB(文字列, バイト数)",
      "example": "RIGHTB(\"こんにちは\", 4)"
  },
  {
      "name": "SEARCHB",
      "category": "テキスト",
      "description": "全角文字を2バイトとして数え、テキスト内で検索文字列が最初に見つかった位置を返します。",
      "syntax": "SEARCHB(検索文字列, 検索対象のテキスト, [開始位置])",
      "example": "SEARCHB(\"りんご\", \"私はりんごを食べました\")"
  },
  {
      "name": "SPLIT",
      "category": "テキスト",
      "description": "指定した区切り文字でテキストを分割し、それぞれを異なるセルに表示します。",
      "syntax": "SPLIT(テキスト, 区切り文字, [各文字での分割], [空のテキストを削除])",
      "example": "SPLIT(\"apple,banana,grape\", \",\")"
  },
  {
      "name": "TEXTJOIN",
      "category": "テキスト",
      "description": "複数の文字列を結合し、指定された区切り文字を挿入します。",
      "syntax": "TEXTJOIN(区切り文字, 空のセルを無視, テキスト1, [テキスト2], …)",
      "example": "TEXTJOIN(\", \", TRUE, A1:A5)"
  },
  {
      "name": "UNICHAR",
      "category": "テキスト",
      "description": "指定された数値の Unicode 文字を返します。",
      "syntax": "UNICHAR(数値)",
      "example": "UNICHAR(9731)"
  },
  {
      "name": "UNICODE",
      "category": "テキスト",
      "description": "テキストの先頭文字に対応する Unicode 値（10進数）を返します。",
      "syntax": "UNICODE(テキスト)",
      "example": "UNICODE(\"A\")"
  },
  {
      "name": "TO_DATE",
      "category": "パーサー",
      "description": "指定した数値を日付に変換します。",
      "syntax": "TO_DATE(値)",
      "example": "TO_DATE(44561)"
  },
  {
      "name": "TO_DOLLARS",
      "category": "パーサー",
      "description": "指定した数値をドル通貨形式に変換します。",
      "syntax": "TO_DOLLARS(値)",
      "example": "TO_DOLLARS(1000)"
  },
  {
      "name": "TO_PERCENT",
      "category": "パーサー",
      "description": "指定した数値を百分率に変換します。",
      "syntax": "TO_PERCENT(値)",
      "example": "TO_PERCENT(0.25)"
  },
  {
      "name": "TO_PURE_NUMBER",
      "category": "パーサー",
      "description": "日付/時刻、百分率、通貨などの表示形式を持つ数値を純粋な数値に変換します。",
      "syntax": "TO_PURE_NUMBER(値)",
      "example": "TO_PURE_NUMBER(A1)"
  },
  {
      "name": "TO_TEXT",
      "category": "パーサー",
      "description": "指定した数値をテキスト値に変換します。",
      "syntax": "TO_TEXT(値)",
      "example": "TO_TEXT(1234.56)"
  },
  {
      "name": "CONVERT",
      "category": "パーサー",
      "description": "異なる単位の数値に変換します。",
      "syntax": "CONVERT(数値, 変換前単位, 変換後単位)",
      "example": "CONVERT(10, \"cm\", \"in\")"
  },
  {
      "name": "FILTER",
      "category": "フィルタ",
      "description": "ソース範囲をフィルタ処理し、指定した条件を満たす行または列のみを返します。",
      "syntax": "FILTER(範囲, 条件1, 条件2)",
      "example": "FILTER(A2:C10, B2:B10>100)"
  },
  {
      "name": "SORT",
      "category": "フィルタ",
      "description": "指定した配列または範囲の行を、1列または複数の列の値に従って並べ替えます。",
      "syntax": "SORT(範囲, 並べ替える列, 昇順, 並べ替える列2, 昇順2)",
      "example": "SORT(A2:C10, 2, TRUE)"
  },
  {
      "name": "UNIQUE",
      "category": "フィルタ",
      "description": "重複する行を破棄し、指定したソース範囲内の一意の行を返します。",
      "syntax": "UNIQUE(範囲)",
      "example": "UNIQUE(A2:A20)"
  },
  {
      "name": "SORTN",
      "category": "フィルタ",
      "description": "並べ替えたデータセット内の最初の n 個の項目を返します。",
      "syntax": "SORTN(範囲, [n], [同等項目の表示モード], [並べ替える列1, 昇順1], ...)",
      "example": "SORTN(A2:B20, 5, FALSE, 2, TRUE)"
  },
  {
      "name": "ADD",
      "category": "演算子",
      "description": "2つの数値の合計を返します（+ 演算子と同じ）。",
      "syntax": "ADD(値1, 値2)",
      "example": "ADD(10, 5)"
  },
  {
      "name": "CONCAT",
      "category": "演算子",
      "description": "2つの値を連結して1つの文字列を作成します（& 演算子と同じ）。",
      "syntax": "CONCAT(値1, 値2)",
      "example": "CONCAT(\"Hello\", \" World\")"
  },
  {
      "name": "DIVIDE",
      "category": "演算子",
      "description": "被除数を除数で割った結果を返します（/ 演算子と同じ）。",
      "syntax": "DIVIDE(被除数, 除数)",
      "example": "DIVIDE(10, 2)"
  },
  {
      "name": "EQ",
      "category": "演算子",
      "description": "指定した2つの値が等しい場合は TRUE、等しくない場合は FALSE を返します（== 演算子と同じ）。",
      "syntax": "EQ(値1, 値2)",
      "example": "EQ(10, 10)"
  },
  {
      "name": "GT",
      "category": "演算子",
      "description": "1つ目の引数が2つ目の引数より大きい場合は TRUE、そうでない場合は FALSE を返します（> 演算子と同じ）。",
      "syntax": "GT(値1, 値2)",
      "example": "GT(10, 5)"
  },
  {
      "name": "GTE",
      "category": "演算子",
      "description": "1つ目の引数が2つ目の引数より大きいか等しい場合は TRUE、そうでない場合は FALSE を返します（>= 演算子と同じ）。",
      "syntax": "GTE(値1, 値2)",
      "example": "GTE(10, 5)"
  },
  {
      "name": "ISBETWEEN",
      "category": "演算子",
      "description": "指定した値が他の2つの値の範囲内にあるかどうかを確認します（両端の値を含むかどうかを選択可能）。",
      "syntax": "ISBETWEEN(比較する値, 最小値, 最大値, 最小値を含む, 最大値を含む)",
      "example": "ISBETWEEN(5, 1, 10, TRUE, TRUE)"
  },
  {
      "name": "LT",
      "category": "演算子",
      "description": "1つ目の引数が2つ目の引数より小さい場合は TRUE、そうでない場合は FALSE を返します（< 演算子と同じ）。",
      "syntax": "LT(値1, 値2)",
      "example": "LT(5, 10)"
  },
  {
      "name": "LTE",
      "category": "演算子",
      "description": "1つ目の引数が2つ目の引数より小さいか等しい場合は TRUE、そうでない場合は FALSE を返します（<= 演算子と同じ）。",
      "syntax": "LTE(値1, 値2)",
      "example": "LTE(5, 5)"
  },
  {
      "name": "MINUS",
      "category": "演算子",
      "description": "2つの数値の差を返します（- 演算子と同じ）。",
      "syntax": "MINUS(値1, 値2)",
      "example": "MINUS(10, 5)"
  },
  {
      "name": "MULTIPLY",
      "category": "演算子",
      "description": "2つの数値の積を返します（* 演算子と同じ）。",
      "syntax": "MULTIPLY(因数1, 因数2)",
      "example": "MULTIPLY(4, 3)"
  },
  {
      "name": "NE",
      "category": "演算子",
      "description": "指定した2つの値が等しくない場合は TRUE、等しい場合は FALSE を返します（!= 演算子と同じ）。",
      "syntax": "NE(値1, 値2)",
      "example": "NE(10, 5)"
  },
  {
      "name": "POW",
      "category": "演算子",
      "description": "指定した数値を指数でべき乗した結果を返します。",
      "syntax": "POW(底, 指数)",
      "example": "POW(2, 3)"
  },
  {
      "name": "UMINUS",
      "category": "演算子",
      "description": "数値の正負を反転させた値を返します。",
      "syntax": "UMINUS(値)",
      "example": "UMINUS(10)"
  },
  {
      "name": "UNARY_PERCENT",
      "category": "演算子",
      "description": "百分率の値を変換して返します（例: UNARY_PERCENT(100) は 1）。",
      "syntax": "UNARY_PERCENT(百分率)",
      "example": "UNARY_PERCENT(50)"
  },
  {
      "name": "UPLUS",
      "category": "演算子",
      "description": "指定した数値をそのまま返します。",
      "syntax": "UPLUS(値)",
      "example": "UPLUS(10)"
  },
  {
      "name": "UNIQUE",
      "category": "演算子",
      "description": "重複する行を破棄し、指定したソース範囲内の一意の行を返します。",
      "syntax": "UNIQUE(範囲, 行で処理, 重複なし)",
      "example": "UNIQUE(A2:A20)"
  },
  {
      "name": "ACCRINT",
      "category": "会計",
      "description": "定期的に利息が支払われる証券の未収利息額を計算します。",
      "syntax": "ACCRINT(発行日, 初回利払日, 受渡日, 利率, 償還額, 頻度, [日数の計算方法])",
      "example": "ACCRINT(A1, A2, A3, 0.05, 1000, 2, 1)"
  },
  {
      "name": "ACCRINTM",
      "category": "会計",
      "description": "満期日に利息が支払われる証券の未収利息額を計算します。",
      "syntax": "ACCRINTM(発行日, 満期, 利率, 償還額, 日数の計算方法)",
      "example": "ACCRINTM(A1, A2, 0.05, 1000, 1)"
  },
  {
      "name": "COUPDAYBS",
      "category": "会計",
      "description": "利息支払対象となる期間の1日目から受渡日までの日数を計算します。",
      "syntax": "COUPDAYBS(受渡日, 満期, 頻度, 日数の計算方法)",
      "example": "COUPDAYBS(A1, A2, 2, 1)"
  },
  {
      "name": "COUPDAYS",
      "category": "会計",
      "description": "指定した受渡日を含む利払期間の日数を計算します。",
      "syntax": "COUPDAYS(受渡日, 満期, 頻度, [日数の計算方法])",
      "example": "COUPDAYS(A1, A2, 2, 1)"
  },
  {
      "name": "COUPDAYSNC",
      "category": "会計",
      "description": "受渡日から次の利息支払日までの日数を計算します。",
      "syntax": "COUPDAYSNC(受渡日, 満期, 頻度, [日数の計算方法])",
      "example": "COUPDAYSNC(A1, A2, 2, 1)"
  },
  {
      "name": "COUPNCD",
      "category": "会計",
      "description": "受渡日後の次の利息支払日を計算します。",
      "syntax": "COUPNCD(受渡日, 満期, 頻度, [日数の計算方法])",
      "example": "COUPNCD(A1, A2, 2, 1)"
  },
  {
      "name": "COUPNUM",
      "category": "会計",
      "description": "証券の受渡日から満期日までの間に利息が支払われる回数を計算します。",
      "syntax": "COUPNUM(受渡日, 満期, 頻度, 日数の計算方法)",
      "example": "COUPNUM(A1, A2, 2, 1)"
  },
  {
      "name": "COUPPCD",
      "category": "会計",
      "description": "受渡日前の最後の利息支払日を計算します。",
      "syntax": "COUPPCD(受渡日, 満期, 頻度, [日数の計算方法])",
      "example": "COUPPCD(A1, A2, 2, 1)"
  },
  {
      "name": "CUMIPMT",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資に対して一定期間に支払われる利息の累計額を計算します。",
      "syntax": "CUMIPMT(利率, 期間数, 現在価値, 初回期間, 最終期間, 期末または期首)",
      "example": "CUMIPMT(0.05/12, 60, 10000, 1, 12, 0)"
  },
  {
      "name": "CUMPRINC",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資に対して一定期間に支払われる元金の累計額を計算します。",
      "syntax": "CUMPRINC(利率, 期間数, 現在価値, 初回期間, 最終期間, 期末または期首)",
      "example": "CUMPRINC(0.05/12, 60, 10000, 1, 12, 0)"
  },
  {
      "name": "DB",
      "category": "会計",
      "description": "算術定率法を使用して、特定の期間における資産の減価償却費を計算します。",
      "syntax": "DB(費用, 残存価額, 耐用期数, 期間, 月)",
      "example": "DB(10000, 1000, 5, 1, 6)"
  },
  {
      "name": "DDB",
      "category": "会計",
      "description": "倍額定率法を使用して、特定の期間における資産の減価償却費を計算します。",
      "syntax": "DDB(費用, 残存価額, 耐用期数, 期間, 逓減率)",
      "example": "DDB(10000, 1000, 5, 1, 2)"
  },
  {
      "name": "DISC",
      "category": "会計",
      "description": "価格に基づいて証券の割引率を計算します。",
      "syntax": "DISC(受渡日, 満期, 価格, 償還額, [日数の計算方法])",
      "example": "DISC(A1, A2, 95, 100, 1)"
  },
  {
      "name": "DOLLARDE",
      "category": "会計",
      "description": "分数で表された価格を小数に変換します。",
      "syntax": "DOLLARDE(分数表示価格, 分母)",
      "example": "DOLLARDE(10.5, 8)"
  },
  {
      "name": "DOLLARFR",
      "category": "会計",
      "description": "小数で表された価格を分数に変換します。",
      "syntax": "DOLLARFR(小数表示価格, 分母)",
      "example": "DOLLARFR(10.625, 8)"
  },
  {
      "name": "EFFECT",
      "category": "会計",
      "description": "名目年利率と1年あたりの複利計算期数を使用して、実効年利率を計算します。",
      "syntax": "EFFECT(名目利率, 年間計算期)",
      "example": "EFFECT(0.05, 12)"
  },
  {
      "name": "FV",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、一定期間定額の利払いがある投資の将来価値を計算します。",
      "syntax": "FV(利率, 期間数, 支払額, 現在価値, 期末または期首)",
      "example": "FV(0.05/12, 60, -200, -10000, 0)"
  },
  {
      "name": "FVSCHEDULE",
      "category": "会計",
      "description": "変動する可能性のある一連の金利に基づいて、元金の将来価値を計算します。",
      "syntax": "FVSCHEDULE(元金, 利率配列)",
      "example": "FVSCHEDULE(1000, {0.05, 0.04, 0.03})"
  },
  {
      "name": "INTRATE",
      "category": "会計",
      "description": "特定の金額で投資を購入し、別の金額で売却した場合に、投資自体からの利息や配当金の支払いなしで得られる実効利率を計算します。",
      "syntax": "INTRATE(購入日, 売却日, 購入額, 売却額, 日数の計算方法)",
      "example": "INTRATE(A1, A2, 1000, 1100, 1)"
  },
  {
      "name": "IPMT",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資に対して支払われる利息を計算します。",
      "syntax": "IPMT(利率, 期間, 期間数, 現在価値, 将来価値, 期末または期首)",
      "example": "IPMT(0.05/12, 1, 60, 10000, 0, 0)"
  },
  {
      "name": "IRR",
      "category": "会計",
      "description": "一連の定期的なキャッシュフローに基づいて、投資に対する内部利益率（IRR）を計算します。",
      "syntax": "IRR(キャッシュフロー額, 推定率)",
      "example": "IRR(A1:A10, 0.1)"
  },
  {
      "name": "MDURATION",
      "category": "会計",
      "description": "定期的に利息が支払われる証券（米国債など）の修正マコーレーデュレーションを予想利回りに基づいて計算します。",
      "syntax": "MDURATION(受渡日, 満期, 利率, 利回り, 頻度, 日数の計算方法)",
      "example": "MDURATION(A1, A2, 0.05, 0.06, 2, 1)"
  },
  {
      "name": "MIRR",
      "category": "会計",
      "description": "一連の定期的なキャッシュフローと、投資の支払利率および再投資の受取収益率との差に基づいて、投資の修正内部利益率（MIRR）を計算します。",
      "syntax": "MIRR(キャッシュフロー額, 投資率, 再投資収益率)",
      "example": "MIRR(A1:A10, 0.05, 0.07)"
  },
  {
      "name": "NOMINAL",
      "category": "会計",
      "description": "実効金利と1年あたりの複利計算期数を指定して、名目年利率を計算します。",
      "syntax": "NOMINAL(実効利率, 年間計算期)",
      "example": "NOMINAL(0.06, 12)"
  },
  {
      "name": "NPER",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資の支払期間の数を計算します。",
      "syntax": "NPER(利率, 支払額, 現在価値, 将来価値, 期末または期首)",
      "example": "NPER(0.05/12, -200, 10000, 0, 0)"
  },
  {
      "name": "NPV",
      "category": "会計",
      "description": "一連の定期的なキャッシュフローと割引率に基づいて、投資の正味現在価値（NPV）を計算します。",
      "syntax": "NPV(割引, キャッシュフロー1, キャッシュフロー2)",
      "example": "NPV(0.1, A1:A10)"
  },
  {
      "name": "PMT",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資の定期的な支払額を計算します。",
      "syntax": "PMT(利率, 期間数, 現在価値, 将来価値, 期末または期首)",
      "example": "PMT(0.05/12, 60, -10000, 0, 0)"
  },
  {
      "name": "PPMT",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、投資の元金の支払額を計算します。",
      "syntax": "PPMT(利率, 期間, 期間数, 現在価値, 将来価値, 期末または期首)",
      "example": "PPMT(0.05/12, 1, 60, -10000, 0, 0)"
  },
  {
      "name": "PRICE",
      "category": "会計",
      "description": "定期的に利息が支払われる証券（米国債など）の価格を、予想利回りに基づいて計算します。",
      "syntax": "PRICE(受渡日, 満期, 利率, 利回り, 償還額, 頻度, 日数の計算方法)",
      "example": "PRICE(A1, A2, 0.05, 0.04, 100, 2, 1)"
  },
  {
      "name": "PRICEDISC",
      "category": "会計",
      "description": "予想利回りに基づいて割引証券（無利息証券）の価格を計算します。",
      "syntax": "PRICEDISC(受渡日, 満期, 割引, 償還額, [日数の計算方法])",
      "example": "PRICEDISC(A1, A2, 0.03, 100, 1)"
  },
  {
      "name": "PRICEMAT",
      "category": "会計",
      "description": "満期日に利息が支払われる証券の価格を、予想利回りに基づいて計算します。",
      "syntax": "PRICEMAT(受渡日, 満期, 発行日, 利率, 利回り, 日数の計算方法)",
      "example": "PRICEMAT(A1, A2, A3, 0.05, 0.04, 1)"
  },
  {
      "name": "PV",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、一定期間定額の利払いがある投資の現在価値を計算します。",
      "syntax": "PV(利率, 期間数, 支払額, 将来価値, 期末または期首)",
      "example": "PV(0.05/12, 60, -200, 0, 0)"
  },
  {
      "name": "RATE",
      "category": "会計",
      "description": "定期的な定額の支払いと一定の利率に基づいて、一定期間定額の利払いがある投資の利率を計算します。",
      "syntax": "RATE(期間数, 定期支払額, 現在価値, 将来価値, 期末または期首, 推定率)",
      "example": "RATE(60, -200, 10000, 0, 0, 0.1)"
  },
  {
      "name": "RECEIVED",
      "category": "会計",
      "description": "指定した日付に購入した固定金利証券の投資で、満期日に支払われる金額を計算します。",
      "syntax": "RECEIVED(受渡日, 満期, 投資, 割引, [日数の計算方法])",
      "example": "RECEIVED(A1, A2, 1000, 0.05, 1)"
  },
  {
      "name": "SLN",
      "category": "会計",
      "description": "定額法を使用して、1期あたりの資産の減価償却費を計算します。",
      "syntax": "SLN(費用, 残存価額, 耐用期数)",
      "example": "SLN(10000, 1000, 5)"
  },
  {
      "name": "SYD",
      "category": "会計",
      "description": "級数法を使用して、特定の期間における資産の減価償却費を計算します。",
      "syntax": "SYD(費用, 残存価額, 耐用期数, 期間)",
      "example": "SYD(10000, 1000, 5, 1)"
  },
  {
      "name": "TBILLEQ",
      "category": "会計",
      "description": "米国財務省短期証券の債券に相当する年利率を、割引率に基づいて計算します。",
      "syntax": "TBILLEQ(受渡日, 満期, 割引)",
      "example": "TBILLEQ(A1, A2, 0.03)"
  },
  {
      "name": "TBILLPRICE",
      "category": "会計",
      "description": "米国財務省短期証券の価格を、割引率に基づいて計算します。",
      "syntax": "TBILLPRICE(受渡日, 満期, 割引)",
      "example": "TBILLPRICE(A1, A2, 0.03)"
  },
  {
      "name": "TBILLYIELD",
      "category": "会計",
      "description": "米国財務省短期証券の利回りを、価格に基づいて計算します。",
      "syntax": "TBILLYIELD(受渡日, 満期, 価格)",
      "example": "TBILLYIELD(A1, A2, 98)"
  },
  {
      "name": "XIRR",
      "category": "会計",
      "description": "不規則な間隔の一連のキャッシュフローに基づいて、投資の内部利益率を計算します。",
      "syntax": "XIRR(キャッシュフロー額, キャッシュフローの日付, 推定率)",
      "example": "XIRR(A1:A10, B1:B10, 0.1)"
  },
  {
      "name": "XNPV",
      "category": "会計",
      "description": "不規則な間隔の一連のキャッシュフローに基づいて、投資の正味現在価値を計算します。",
      "syntax": "XNPV(割引, キャッシュフロー額, キャッシュフローの日付)",
      "example": "XNPV(0.1, A1:A10, B1:B10)"
  },
  {
      "name": "YIELD",
      "category": "会計",
      "description": "定期的に利息が支払われる証券（米国債など）の年利回りを、価格に基づいて計算します。",
      "syntax": "YIELD(受渡日, 満期, 利率, 価格, 償還額, 頻度, 日数の計算方法)",
      "example": "YIELD(A1, A2, 0.05, 95, 100, 2, 1)"
  },
  {
      "name": "YIELDDISC",
      "category": "会計",
      "description": "割引証券（無利息証券）の年利回りを、価格に基づいて計算します。",
      "syntax": "YIELDDISC(受渡日, 満期, 価格, 償還額, 日数の計算方法)",
      "example": "YIELDDISC(A1, A2, 95, 100, 1)"
  },
  {
      "name": "AMORLINC",
      "category": "会計",
      "description": "特定の会計期の減価償却費を返します。資産を会計期の途中で購入した場合は、日割り計算による減価償却費を返します。",
      "syntax": "AMORLINC(取得価額, 購入日, 第1期終了日, 残存価額, 期, 率, [基準])",
      "example": "AMORLINC(10000, A1, A2, 1000, 1, 0.1, 1)"
  },
  {
      "name": "DURATION",
      "category": "会計",
      "description": "特定の現在価値の投資が指定した率で目標とする価値に達するまでに必要な複利計算期数を計算します。",
      "syntax": "DURATION(受渡日, 満期, 利率, 利回り, 頻度, [日数の計算方法])",
      "example": "DURATION(A1, A2, 0.05, 0.06, 2, 1)"
  },
  {
      "name": "PDURATION",
      "category": "会計",
      "description": "指定された利率で投資金額が特定の金額になるまでの期間数を返します。",
      "syntax": "PDURATION(利率, 現在価値, 将来価値)",
      "example": "PDURATION(0.05, 1000, 2000)"
  },
  {
      "name": "RRI",
      "category": "会計",
      "description": "投資金額がある特定の期間内に指定された金額になるのに必要な利率を返します。",
      "syntax": "RRI(期間数, 現在価値, 将来価値)",
      "example": "RRI(10, 1000, 2000)"
  },
  {
      "name": "VDB",
      "category": "会計",
      "description": "特定の期（または期の一部）における資産の減価償却費を返します。",
      "syntax": "VDB(費用, 残存価額, 耐用期数, 開始期, 終了期, [逓減率], [切り替えなし])",
      "example": "VDB(10000, 1000, 5, 1, 2, 2, TRUE)"
  },
  {
      "name": "ADDRESS",
      "category": "参照",
      "description": "セル参照を文字列として返します。",
      "syntax": "ADDRESS(行, 列, 絶対相対モード, A1表記の使用)",
      "example": "ADDRESS(1, 1, 4, TRUE)"
  },
  {
      "name": "CHOOSE",
      "category": "参照",
      "description": "指数に基づいて値のリストから要素を返します。",
      "syntax": "CHOOSE(指数, 選択1, 選択2)",
      "example": "CHOOSE(2, \"りんご\", \"バナナ\", \"オレンジ\")"
  },
  {
      "name": "COLUMN",
      "category": "参照",
      "description": "指定したセルの列番号を返します（A は 1 となります）。",
      "syntax": "COLUMN(セル参照)",
      "example": "COLUMN(A1)"
  },
  {
      "name": "COLUMNS",
      "category": "参照",
      "description": "指定した配列または範囲内の列数を返します。",
      "syntax": "COLUMNS(範囲)",
      "example": "COLUMNS(A1:C3)"
  },
  {
      "name": "HLOOKUP",
      "category": "参照",
      "description": "水平方向の検索を行い、範囲の1行目で指定したキーを検索し、同じ列内の指定したセルの値を返します。",
      "syntax": "HLOOKUP(検索キー, 範囲, 指数, 並べ替え済み)",
      "example": "HLOOKUP(1001, A1:D3, 2, FALSE)"
  },
  {
      "name": "INDEX",
      "category": "参照",
      "description": "行と列のオフセットで指定したセルのコンテンツを返します。",
      "syntax": "INDEX(参照, 行, 列)",
      "example": "INDEX(A1:C3, 2, 1)"
  },
  {
      "name": "INDIRECT",
      "category": "参照",
      "description": "文字列で指定したセル参照を返します。",
      "syntax": "INDIRECT(セル参照の文字列)",
      "example": "INDIRECT(\"A1\")"
  },
  {
      "name": "MATCH",
      "category": "参照",
      "description": "指定した値と一致する範囲内のアイテムの相対的な位置を返します。",
      "syntax": "MATCH(検索キー, 範囲, 検索の種類)",
      "example": "MATCH(50, A1:A10, 0)"
  },
  {
      "name": "OFFSET",
      "category": "参照",
      "description": "開始セル参照から指定した行数と列数だけシフトした位置にあるセル範囲の参照を返します。",
      "syntax": "OFFSET(セル参照, オフセット行, オフセット列, 高さ, 幅)",
      "example": "OFFSET(A1, 2, 1, 1, 1)"
  },
  {
      "name": "ROW",
      "category": "参照",
      "description": "指定したセルの行番号を返します。",
      "syntax": "ROW(セル参照)",
      "example": "ROW(A1)"
  },
  {
      "name": "ROWS",
      "category": "参照",
      "description": "指定した配列または範囲内の行数を返します。",
      "syntax": "ROWS(範囲)",
      "example": "ROWS(A1:A10)"
  },
  {
      "name": "VLOOKUP",
      "category": "参照",
      "description": "垂直方向の検索を行い、範囲の1列目で指定したキーを検索し、同じ行内の指定したセルの値を返します。",
      "syntax": "VLOOKUP(検索キー, 範囲, 指数, 並べ替え済み)",
      "example": "VLOOKUP(1001, A1:D10, 2, FALSE)"
  },
  {
      "name": "FORMULATEXT",
      "category": "参照",
      "description": "数式を文字列として返します。",
      "syntax": "FORMULATEXT(セル)",
      "example": "FORMULATEXT(A1)"
  },
  {
      "name": "LOOKUP",
      "category": "参照",
      "description": "行または列でキーを検索し、検索行または検索列と同じ位置にある結果範囲のセルの値を返します。",
      "syntax": "LOOKUP(検索キー, 検索範囲|検索結果配列, [結果範囲])",
      "example": "LOOKUP(50, A1:A10, B1:B10)"
  },
  {
      "name": "XLOOKUP",
      "category": "参照",
      "description": "検索範囲を検索して見つかった一致の位置に基づき、結果範囲内の値を返します。一致するものが見つからない場合は、最も近い値が返されます。",
      "syntax": "XLOOKUP(検索キー, 検索範囲, 結果の範囲, 見つからない場合の値, [一致モード], [検索モード])",
      "example": "XLOOKUP(1001, A1:A10, B1:B10, \"該当なし\")"
  },
  {
      "name": "ERROR.TYPE",
      "category": "情報",
      "description": "別のセルのエラー値に対応する数値を返します。",
      "syntax": "ERROR.TYPE(参照)",
      "example": "ERROR.TYPE(A1)"
  },
  {
      "name": "ISBLANK",
      "category": "情報",
      "description": "参照セルが空白であるかどうかを検証します。",
      "syntax": "ISBLANK(値)",
      "example": "ISBLANK(A1)"
  },
  {
      "name": "ISERR",
      "category": "情報",
      "description": "値が「#N/A」以外のエラーであるかどうかを検証します。",
      "syntax": "ISERR(値)",
      "example": "ISERR(A1)"
  },
  {
      "name": "ISERROR",
      "category": "情報",
      "description": "値がエラーであるかどうかを検証します。",
      "syntax": "ISERROR(値)",
      "example": "ISERROR(A1)"
  },
  {
      "name": "ISLOGICAL",
      "category": "情報",
      "description": "値がTRUEまたはFALSEであるかを検証します。",
      "syntax": "ISLOGICAL(値)",
      "example": "ISLOGICAL(A1)"
  },
  {
      "name": "ISNA",
      "category": "情報",
      "description": "値が「#N/A」のエラー値であるかどうかを検証します。",
      "syntax": "ISNA(値)",
      "example": "ISNA(A1)"
  },
  {
      "name": "ISNONTEXT",
      "category": "情報",
      "description": "値がテキストでないかどうかを検証します。",
      "syntax": "ISNONTEXT(値)",
      "example": "ISNONTEXT(A1)"
  },
  {
      "name": "ISNUMBER",
      "category": "情報",
      "description": "値が数値であるかどうかを検証します。",
      "syntax": "ISNUMBER(値)",
      "example": "ISNUMBER(A1)"
  },
  {
      "name": "ISREF",
      "category": "情報",
      "description": "値が有効なセル参照であるかどうかを検証します。",
      "syntax": "ISREF(値)",
      "example": "ISREF(A1)"
  },
  {
      "name": "ISTEXT",
      "category": "情報",
      "description": "値がテキストであるかどうかを検証します。",
      "syntax": "ISTEXT(値)",
      "example": "ISTEXT(A1)"
  },
  {
      "name": "N",
      "category": "情報",
      "description": "引数を数値として返します。",
      "syntax": "N(値)",
      "example": "N(\"100\")"
  },
  {
      "name": "NA",
      "category": "情報",
      "description": "「値がない」ことを意味するエラー値「#N/A」を返します。",
      "syntax": "NA()",
      "example": "NA()"
  },
  {
      "name": "ISDATE",
      "category": "情報",
      "description": "値が日付かどうかを検証します。",
      "syntax": "ISDATE(値)",
      "example": "ISDATE(A1)"
  },
  {
      "name": "ISEMAIL",
      "category": "情報",
      "description": "値が有効なメールアドレスであるかどうかを検証します。",
      "syntax": "ISEMAIL(値)",
      "example": "ISEMAIL(\"example@example.com\")"
  },
  {
      "name": "TYPE",
      "category": "情報",
      "description": "関数に渡されるデータの種類に関連付けられている数字を返します。",
      "syntax": "TYPE(値)",
      "example": "TYPE(A1)"
  },
  {
      "name": "CELL",
      "category": "情報",
      "description": "指定されたセルについて要求された情報を返します。",
      "syntax": "CELL(情報の種類, 参照)",
      "example": "CELL(\"address\", A1)"
  },
  {
      "name": "ABS",
      "category": "数学",
      "description": "数値の絶対値を返します。",
      "syntax": "ABS(値)",
      "example": "ABS(-10)"
  },
  {
      "name": "ACOS",
      "category": "数学",
      "description": "値の逆コサインをラジアンで返します。",
      "syntax": "ACOS(値)",
      "example": "ACOS(0.5)"
  },
  {
      "name": "ACOSH",
      "category": "数学",
      "description": "数値の逆双曲線余弦を返します。",
      "syntax": "ACOSH(値)",
      "example": "ACOSH(2)"
  },
  {
      "name": "ASIN",
      "category": "数学",
      "description": "値の逆サインをラジアンで返します。",
      "syntax": "ASIN(値)",
      "example": "ASIN(0.5)"
  },
  {
      "name": "ASINH",
      "category": "数学",
      "description": "数値の逆双曲線正弦を返します。",
      "syntax": "ASINH(値)",
      "example": "ASINH(1)"
  },
  {
      "name": "ATAN",
      "category": "数学",
      "description": "値の逆タンジェントをラジアンで返します。",
      "syntax": "ATAN(値)",
      "example": "ATAN(1)"
  },
  {
      "name": "ATAN2",
      "category": "数学",
      "description": "x軸と、原点 (0,0) から指定した座標点 (x,y) を通る線との間の角度をラジアンで返します。",
      "syntax": "ATAN2(x, y)",
      "example": "ATAN2(1, 1)"
  },
  {
      "name": "ATANH",
      "category": "数学",
      "description": "数値の逆双曲線正接を返します。",
      "syntax": "ATANH(値)",
      "example": "ATANH(0.5)"
  },
  {
      "name": "CEILING",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り上げます。",
      "syntax": "CEILING(値, 基準値)",
      "example": "CEILING(10.5, 2)"
  },
  {
      "name": "COMBIN",
      "category": "数学",
      "description": "指定した数の標本の集まりからいくつかの標本を選択するときの組み合わせの数を返します。",
      "syntax": "COMBIN(n, k)",
      "example": "COMBIN(5, 2)"
  },
  {
      "name": "COS",
      "category": "数学",
      "description": "ラジアンで指定した角度のコサインを返します。",
      "syntax": "COS(角度)",
      "example": "COS(PI()/3)"
  },
  {
      "name": "COSH",
      "category": "数学",
      "description": "任意の実数の双曲線余弦を返します。",
      "syntax": "COSH(値)",
      "example": "COSH(2)"
  },
  {
      "name": "COUNTBLANK",
      "category": "数学",
      "description": "指定した範囲に含まれる空白セルの個数を返します。",
      "syntax": "COUNTBLANK(範囲)",
      "example": "COUNTBLANK(A1:A10)"
  },
  {
      "name": "COUNTIF",
      "category": "数学",
      "description": "範囲内で条件に一致する要素の個数を返します。",
      "syntax": "COUNTIF(範囲, 条件)",
      "example": "COUNTIF(A1:A10, \">5\")"
  },
  {
      "name": "COUNTUNIQUE",
      "category": "数学",
      "description": "指定した値や範囲のリストから、一意の値の個数をカウントします。",
      "syntax": "COUNTUNIQUE(値1, 値2)",
      "example": "COUNTUNIQUE(A1:A10)"
  },
  {
      "name": "DEGREES",
      "category": "数学",
      "description": "角度の値をラジアンから度数に変換します。",
      "syntax": "DEGREES(角度)",
      "example": "DEGREES(PI())"
  },
  {
      "name": "ERFC",
      "category": "数学",
      "description": "値のガウス相補誤差関数を返します。",
      "syntax": "ERFC(z)",
      "example": "ERFC(1)"
  },
  {
      "name": "EVEN",
      "category": "数学",
      "description": "最も近い偶数の整数に数値を切り上げます。",
      "syntax": "EVEN(値)",
      "example": "EVEN(3.5)"
  },
  {
      "name": "EXP",
      "category": "数学",
      "description": "オイラー数 e（約2.718）を底とする数値のべき乗を返します。",
      "syntax": "EXP(指数)",
      "example": "EXP(2)"
  },
  {
      "name": "FACT",
      "category": "数学",
      "description": "数値の階乗を返します。",
      "syntax": "FACT(値)",
      "example": "FACT(5)"
  },
  {
      "name": "FACTDOUBLE",
      "category": "数学",
      "description": "数値の「二重階乗」を返します。",
      "syntax": "FACTDOUBLE(値)",
      "example": "FACTDOUBLE(5)"
  },
  {
      "name": "FLOOR",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り捨てます。",
      "syntax": "FLOOR(値, 基準値)",
      "example": "FLOOR(10.5, 2)"
  },
  {
      "name": "GAMMALN",
      "category": "数学",
      "description": "オイラー数 e を底とする指定したガンマ関数の対数を返します。",
      "syntax": "GAMMALN(値)",
      "example": "GAMMALN(5)"
  },
  {
      "name": "GCD",
      "category": "数学",
      "description": "1 つ以上の整数の最大公約数を返します。",
      "syntax": "GCD(値1, 値2)",
      "example": "GCD(12, 18)"
  },
  {
      "name": "INT",
      "category": "数学",
      "description": "ある数値をその数値以下の最も近い整数に切り捨てます。",
      "syntax": "INT(値)",
      "example": "INT(5.8)"
  },
  {
      "name": "ISEVEN",
      "category": "数学",
      "description": "指定した値が偶数であるかどうかを検証します。",
      "syntax": "ISEVEN(値)",
      "example": "ISEVEN(4)"
  },
  {
      "name": "ISODD",
      "category": "数学",
      "description": "指定した値が奇数であるかどうかを検証します。",
      "syntax": "ISODD(値)",
      "example": "ISODD(5)"
  },
  {
      "name": "LCM",
      "category": "数学",
      "description": "1 以上の整数の最小公倍数を返します。",
      "syntax": "LCM(値1, 値2)",
      "example": "LCM(4, 5)"
  },
  {
      "name": "LN",
      "category": "数学",
      "description": "オイラー数 e を底とする数値の対数を返します。",
      "syntax": "LN(値)",
      "example": "LN(10)"
  },
  {
      "name": "LOG",
      "category": "数学",
      "description": "指定した数を底とする数値の対数を返します。",
      "syntax": "LOG(値, 底)",
      "example": "LOG(100, 10)"
  },
  {
      "name": "LOG10",
      "category": "数学",
      "description": "10 を底とする数値の対数を返します。",
      "syntax": "LOG10(値)",
      "example": "LOG10(100)"
  },
  {
      "name": "MOD",
      "category": "数学",
      "description": "モジュロ演算の結果、すなわち除算の剰余を返します。",
      "syntax": "MOD(被除数, 除数)",
      "example": "MOD(10, 3)"
  },
  {
      "name": "MROUND",
      "category": "数学",
      "description": "ある数値を最も近い整数の倍数に丸めます。",
      "syntax": "MROUND(値, 基準値)",
      "example": "MROUND(10.5, 2)"
  },
  {
      "name": "MULTINOMIAL",
      "category": "数学",
      "description": "[値] の階乗の積で割った値の和の階乗を返します。",
      "syntax": "MULTINOMIAL(値1, 値2)",
      "example": "MULTINOMIAL(3, 2, 1)"
  },
  {
      "name": "ODD",
      "category": "数学",
      "description": "最も近い奇数の整数に数値を切り上げます。",
      "syntax": "ODD(値)",
      "example": "ODD(4)"
  },
  {
      "name": "PI",
      "category": "数学",
      "description": "円周率の値を小数点以下 14 桁で返します。",
      "syntax": "PI()",
      "example": "PI()"
  },
  {
      "name": "POWER",
      "category": "数学",
      "description": "指定した数値を指数でべき乗した結果を返します。",
      "syntax": "POWER(底, 指数)",
      "example": "POWER(2, 3)"
  },
  {
      "name": "PRODUCT",
      "category": "数学",
      "description": "一連の数値を乗算して積を返します。",
      "syntax": "PRODUCT(因数1, 因数2)",
      "example": "PRODUCT(2, 3, 4)"
  },
  {
      "name": "QUOTIENT",
      "category": "数学",
      "description": "除算の結果（整数部分）を返します。",
      "syntax": "QUOTIENT(被除数, 除数)",
      "example": "QUOTIENT(10, 3)"
  },
  {
      "name": "RADIANS",
      "category": "数学",
      "description": "角度を度数からラジアンに変換します。",
      "syntax": "RADIANS(角度)",
      "example": "RADIANS(180)"
  },
  {
      "name": "RAND",
      "category": "数学",
      "description": "0 以上 1 未満の乱数を返します。",
      "syntax": "RAND()",
      "example": "RAND()"
  },
  {
      "name": "RANDBETWEEN",
      "category": "数学",
      "description": "下限以上、上限以下の整数の一様乱数を返します。",
      "syntax": "RANDBETWEEN(下限, 上限)",
      "example": "RANDBETWEEN(1, 100)"
  },
  {
      "name": "ROUND",
      "category": "数学",
      "description": "標準規則に従って、ある数値を指定した小数点以下の桁数に四捨五入します。",
      "syntax": "ROUND(値, 桁数)",
      "example": "ROUND(3.14159, 2)"
  },
  {
      "name": "ROUNDDOWN",
      "category": "数学",
      "description": "ある数値を指定した小数点以下の桁数に切り捨てます。",
      "syntax": "ROUNDDOWN(値, 桁数)",
      "example": "ROUNDDOWN(3.14159, 2)"
  },
  {
      "name": "ROUNDUP",
      "category": "数学",
      "description": "ある数値を指定した小数点以下の桁数に切り上げます。",
      "syntax": "ROUNDUP(値, 桁数)",
      "example": "ROUNDUP(3.14159, 2)"
  },
  {
      "name": "SERIESSUM",
      "category": "数学",
      "description": "べき級数の和を計算します。",
      "syntax": "SERIESSUM(x, n, m, a)",
      "example": "SERIESSUM(2, 1, 1, {1, 2, 3})"
  },
  {
      "name": "SIGN",
      "category": "数学",
      "description": "指定した数値が負の場合は -1、正の場合は 1、ゼロの場合は 0 を返します。",
      "syntax": "SIGN(値)",
      "example": "SIGN(-10)"
  },
  {
      "name": "SIN",
      "category": "数学",
      "description": "ラジアンで指定した角度のサインを返します。",
      "syntax": "SIN(角度)",
      "example": "SIN(PI()/2)"
  },
  {
      "name": "SINH",
      "category": "数学",
      "description": "任意の実数の双曲線正弦を返します。",
      "syntax": "SINH(値)",
      "example": "SINH(2)"
  },
  {
      "name": "SQRT",
      "category": "数学",
      "description": "正の数値の正の平方根を返します。",
      "syntax": "SQRT(値)",
      "example": "SQRT(16)"
  },
  {
      "name": "SQRTPI",
      "category": "数学",
      "description": "円周率と指定した正の数値の積の、正の平方根を返します。",
      "syntax": "SQRTPI(値)",
      "example": "SQRTPI(2)"
  },
  {
      "name": "SUBTOTAL",
      "category": "数学",
      "description": "指定した集計関数を使用して、セルの垂直範囲の小計を返します。",
      "syntax": "SUBTOTAL(関数コード, 範囲1, 範囲2)",
      "example": "SUBTOTAL(9, A1:A10)"
  },
  {
      "name": "SUM",
      "category": "数学",
      "description": "一連の数値またはセルの合計を返します。",
      "syntax": "SUM(値1, 値2)",
      "example": "SUM(A1:A10)"
  },
  {
      "name": "SUMIF",
      "category": "数学",
      "description": "範囲内の条件に一致するセルの合計を返します。",
      "syntax": "SUMIF(範囲, 条件, 合計範囲)",
      "example": "SUMIF(A1:A10, \">5\", B1:B10)"
  },
  {
      "name": "SUMSQ",
      "category": "数学",
      "description": "一連の数値またはセルの平方和を返します。",
      "syntax": "SUMSQ(値1, 値2)",
      "example": "SUMSQ(3, 4)"
  },
  {
      "name": "TAN",
      "category": "数学",
      "description": "ラジアンで指定した角度のタンジェントを返します。",
      "syntax": "TAN(角度)",
      "example": "TAN(PI()/4)"
  },
  {
      "name": "TANH",
      "category": "数学",
      "description": "任意の実数の双曲線正接を返します。",
      "syntax": "TANH(値)",
      "example": "TANH(1)"
  },
  {
      "name": "TRUNC",
      "category": "数学",
      "description": "ある数値の特定の有効桁数より後を切り捨てて、その有効桁数に変換します。",
      "syntax": "TRUNC(値, 桁数)",
      "example": "TRUNC(5.678, 2)"
  },
  {
      "name": "ACOT",
      "category": "数学",
      "description": "値の逆コタンジェントをラジアンで返します。",
      "syntax": "ACOT(値)",
      "example": "ACOT(1)"
  },
  {
      "name": "ACOTH",
      "category": "数学",
      "description": "値の逆双曲線コタンジェントをラジアンで返します。-1～1 の値は指定できません。",
      "syntax": "ACOTH(値)",
      "example": "ACOTH(2)"
  },
  {
      "name": "BASE",
      "category": "数学",
      "description": "数値を別の底のテキスト表現に変換します。",
      "syntax": "BASE(値, 底, [最小文字数])",
      "example": "BASE(10, 2, 4)"
  },
  {
      "name": "CEILING.MATH",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り上げます。",
      "syntax": "CEILING.MATH(数値, [基準値], [モード])",
      "example": "CEILING.MATH(-7.5, 2, 1)"
  },
  {
      "name": "CEILING.PRECISE",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り上げます。数値の正負に関係なく切り上げます。",
      "syntax": "CEILING.PRECISE(数値, [基準値])",
      "example": "CEILING.PRECISE(-7.5, 2)"
  },
  {
      "name": "COMBINA",
      "category": "数学",
      "description": "指定した数の標本からいくつかの標本を選択するときの組み合わせの数を返します。同じ標本を複数回選択できます。",
      "syntax": "COMBINA(n, k)",
      "example": "COMBINA(5, 3)"
  },
  {
      "name": "COT",
      "category": "数学",
      "description": "ラジアンで指定した角度のコタンジェントを返します。",
      "syntax": "COT(角度)",
      "example": "COT(PI()/4)"
  },
  {
      "name": "COTH",
      "category": "数学",
      "description": "任意の実数の双曲線コタンジェントを返します。",
      "syntax": "COTH(値)",
      "example": "COTH(2)"
  },
  {
      "name": "COUNTIFS",
      "category": "数学",
      "description": "複数の条件に基づいて範囲の個数を返します。",
      "syntax": "COUNTIFS(条件範囲1, 条件1, [条件範囲2, 条件2, ...])",
      "example": "COUNTIFS(A1:A10, \">5\", B1:B10, \"<10\")"
  },
  {
      "name": "CSC",
      "category": "数学",
      "description": "ラジアンで指定した角度のコセカントを返します。",
      "syntax": "CSC(角度)",
      "example": "CSC(PI()/6)"
  },
  {
      "name": "ERFC.PRECISE",
      "category": "数学",
      "description": "値のガウス相補誤差関数を返します。",
      "syntax": "ERFC.PRECISE(z)",
      "example": "ERFC.PRECISE(1)"
  },
  {
      "name": "FLOOR.MATH",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り捨てます。負の数値の場合は、モードにより 0 に近い値または 0 から離れた値のどちらかに丸めます。",
      "syntax": "FLOOR.MATH(数値, [基準値], [モード])",
      "example": "FLOOR.MATH(-7.5, 2, 1)"
  },
  {
      "name": "GAMMALN.PRECISE",
      "category": "数学",
      "description": "オイラー数 e を底とする指定したガンマ関数の対数を返します。",
      "syntax": "GAMMALN.PRECISE(値)",
      "example": "GAMMALN.PRECISE(5)"
  },
  {
      "name": "ISO.CEILING",
      "category": "数学",
      "description": "指定した基準値の倍数のうち、最も近い整数の倍数に数値を切り上げます。数値の正負に関係なく切り上げます。",
      "syntax": "ISO.CEILING(数値, [基準値])",
      "example": "ISO.CEILING(-7.5, 2)"
  },
  {
      "name": "MUNIT",
      "category": "数学",
      "description": "指定されたサイズ（次元 x 次元）の単位行列を返します。",
      "syntax": "MUNIT(次元)",
      "example": "MUNIT(3)"
  },
  {
      "name": "SEQUENCE",
      "category": "数学",
      "description": "1、2、3、4 などの連続する数値の配列を返します。",
      "syntax": "SEQUENCE(行, 列, 開始, ステップ)",
      "example": "SEQUENCE(3, 2, 1, 1)"
  },
  {
      "name": "SUMIFS",
      "category": "数学",
      "description": "複数の条件に基づいて範囲の合計を返します。",
      "syntax": "SUMIFS(合計範囲, 条件範囲1, 条件1, [条件範囲2, 条件2, ...])",
      "example": "SUMIFS(B1:B10, A1:A10, \">5\", C1:C10, \"<10\")"
  },
  {
      "name": "AVEDEV",
      "category": "統計",
      "description": "データセットの平均値からデータの偏差の大きさの平均を求めます。",
      "syntax": "AVEDEV(値1, 値2)",
      "example": "AVEDEV(A1:A10)"
  },
  {
      "name": "AVERAGE",
      "category": "統計",
      "description": "データセット内の値の平均値を返します。テキストは無視されます。",
      "syntax": "AVERAGE(値1, 値2)",
      "example": "AVERAGE(A1:A10)"
  },
  {
      "name": "AVERAGEA",
      "category": "統計",
      "description": "データセット内の値の平均値を返します。",
      "syntax": "AVERAGEA(値1, 値2)",
      "example": "AVERAGEA(A1:A10)"
  },
  {
      "name": "BINOMDIST",
      "category": "統計",
      "description": "指定した試行数、母集団のサイズ、母集団の成功数から、復元抽出で一定の試行が成功する確率（または最大の成功数が得られる確率）を計算します。",
      "syntax": "BINOMDIST(成功数, 試行回数, 成功率, 累積)",
      "example": "BINOMDIST(3, 10, 0.5, TRUE)"
  },
  {
      "name": "CONFIDENCE",
      "category": "統計",
      "description": "正規分布に対する信頼区間の幅の 1/2 を計算します。",
      "syntax": "CONFIDENCE(アルファ, 標準偏差, 母集団サイズ)",
      "example": "CONFIDENCE(0.05, 2.5, 100)"
  },
  {
      "name": "CORREL",
      "category": "統計",
      "description": "データセットに対するピアソンの積率相関係数 r を計算します。",
      "syntax": "CORREL(データ_y, データ_x)",
      "example": "CORREL(A1:A10, B1:B10)"
  },
  {
      "name": "COUNT",
      "category": "統計",
      "description": "データセット内の数値の個数を返します。",
      "syntax": "COUNT(値1, [値2, ...])",
      "example": "COUNT(A1:A10)"
  },
  {
      "name": "COUNTA",
      "category": "統計",
      "description": "データセット内の値の個数を返します。",
      "syntax": "COUNTA(値1, [値2, ...])",
      "example": "COUNTA(A1:A10)"
  },
  {
      "name": "COVAR",
      "category": "統計",
      "description": "データセットの共分散を計算します。",
      "syntax": "COVAR(データ_y, データ_x)",
      "example": "COVAR(A1:A10, B1:B10)"
  },
  {
      "name": "CRITBINOM",
      "category": "統計",
      "description": "累積二項分布が指定した基準以上になる最小値を計算します。",
      "syntax": "CRITBINOM(試行回数, 成功率, 目標確率)",
      "example": "CRITBINOM(100, 0.5, 0.9)"
  },
  {
      "name": "DEVSQ",
      "category": "統計",
      "description": "標本に基づいて偏差の平方和を計算します。",
      "syntax": "DEVSQ(値1, 値2)",
      "example": "DEVSQ(A1:A10)"
  },
  {
      "name": "F.DIST.RT",
      "category": "統計",
      "description": "指定した x を代入して、2 つのデータセットの F 分布の右側確率（ばらつき）を求めます。",
      "syntax": "F.DIST.RT(x, degrees_freedom1, degrees_freedom2)",
      "example": "F.DIST.RT(2.5, 5, 10)"
  },
  {
      "name": "FISHER",
      "category": "統計",
      "description": "指定した値のフィッシャー変換を返します。",
      "syntax": "FISHER(値)",
      "example": "FISHER(0.8)"
  },
  {
      "name": "FISHERINV",
      "category": "統計",
      "description": "指定した値に対するフィッシャー変換の逆関数を返します。",
      "syntax": "FISHERINV(値)",
      "example": "FISHERINV(1.2)"
  },
  {
      "name": "FORECAST",
      "category": "統計",
      "description": "データセットの線形回帰に基づいて、指定した x 値に対する y 値の将来値を計算します。",
      "syntax": "FORECAST(x, データ_y, データ_x)",
      "example": "FORECAST(15, A1:A10, B1:B10)"
  },
  {
      "name": "GEOMEAN",
      "category": "統計",
      "description": "データセットの相乗平均を計算します。",
      "syntax": "GEOMEAN(値1, 値2)",
      "example": "GEOMEAN(A1:A10)"
  },
  {
      "name": "HARMEAN",
      "category": "統計",
      "description": "データセットの調和平均を計算します。",
      "syntax": "HARMEAN(値1, 値2)",
      "example": "HARMEAN(A1:A10)"
  },
  {
      "name": "HYPGEOMDIST",
      "category": "統計",
      "description": "指定した試行数、母集団のサイズ、母集団の成功数から、非復元抽出で一定の試行が成功する確率を計算します。",
      "syntax": "HYPGEOMDIST(成功数, 試行回数, 母集団の成功数, 母集団サイズ)",
      "example": "HYPGEOMDIST(2, 10, 5, 50)"
  },
  {
      "name": "INTERCEPT",
      "category": "統計",
      "description": "データセットの線形回帰から得られた直線が y 軸と交わる座標の y 値を計算します（x=0）。",
      "syntax": "INTERCEPT(データ_y, データ_x)",
      "example": "INTERCEPT(A1:A10, B1:B10)"
  },
  {
      "name": "KURT",
      "category": "統計",
      "description": "データセットの尖度を計算します。尖度は、データセットの形、特に先鋭度を表します。",
      "syntax": "KURT(値1, 値2)",
      "example": "KURT(A1:A10)"
  },
  {
      "name": "LARGE",
      "category": "統計",
      "description": "データセットから N 番目に大きい要素を返します（N は指定した数値です）。",
      "syntax": "LARGE(データ, n)",
      "example": "LARGE(A1:A10, 2)"
  },
  {
      "name": "LOGINV",
      "category": "統計",
      "description": "特定の平均値と標準偏差を使用して、指定した値における対数正規累積分布の逆関数の値を返します。",
      "syntax": "LOGINV(x, 平均, 標準偏差)",
      "example": "LOGINV(0.95, 1, 0.5)"
  },
  {
      "name": "LOGNORMDIST",
      "category": "統計",
      "description": "特定の平均値と標準偏差を使用して、指定した値における対数正規累積分布の値を返します。",
      "syntax": "LOGNORMDIST(x, 平均, 標準偏差)",
      "example": "LOGNORMDIST(2, 1, 0.5)"
  },
  {
      "name": "MAX",
      "category": "統計",
      "description": "数値のデータセットにおける最大値を返します。",
      "syntax": "MAX(値1, 値2)",
      "example": "MAX(A1:A10)"
  },
  {
      "name": "MAXA",
      "category": "統計",
      "description": "データセットにおける最大数値を返します。",
      "syntax": "MAXA(値1, 値2)",
      "example": "MAXA(A1:A10)"
  },
  {
      "name": "MEDIAN",
      "category": "統計",
      "description": "数値のデータセットにおける中央値を返します。",
      "syntax": "MEDIAN(値1, 値2)",
      "example": "MEDIAN(A1:A10)"
  },
  {
      "name": "MIN",
      "category": "統計",
      "description": "数値のデータセットにおける最小値を返します。",
      "syntax": "MIN(値1, 値2)",
      "example": "MIN(A1:A10)"
  },
  {
      "name": "MINA",
      "category": "統計",
      "description": "データセットにおける最小数値を返します。",
      "syntax": "MINA(値1, 値2)",
      "example": "MINA(A1:A10)"
  },
  {
      "name": "MODE",
      "category": "統計",
      "description": "データセットにおける最頻値を返します。",
      "syntax": "MODE(値1, 値2)",
      "example": "MODE(A1:A10)"
  },
  {
      "name": "NEGBINOMDIST",
      "category": "統計",
      "description": "独立試行で成功率が一定のとき、特定の回数の試行が成功する前に、指定した回数を失敗する確率を計算します。",
      "syntax": "NEGBINOMDIST(失敗数, 成功数, 成功率)",
      "example": "NEGBINOMDIST(5, 10, 0.5)"
  },
  {
      "name": "NORMDIST",
      "category": "統計",
      "description": "指定した値、平均値、標準偏差に対する正規分布関数（または正規累積分布関数）の値を返します。",
      "syntax": "NORMDIST(x, 平均, 標準偏差, 累積)",
      "example": "NORMDIST(2, 0, 1, TRUE)"
  },
  {
      "name": "NORMINV",
      "category": "統計",
      "description": "指定した値、平均値、標準偏差に対する正規分布の逆関数の値を返します。",
      "syntax": "NORMINV(x, 平均, 標準偏差)",
      "example": "NORMINV(0.95, 0, 1)"
  },
  {
      "name": "NORMSDIST",
      "category": "統計",
      "description": "指定した値に対する標準正規累積分布関数の値を返します。",
      "syntax": "NORMSDIST(x)",
      "example": "NORMSDIST(1.5)"
  },
  {
      "name": "NORMSINV",
      "category": "統計",
      "description": "指定した値に対する標準正規分布の逆関数の値を返します。",
      "syntax": "NORMSINV(x)",
      "example": "NORMSINV(0.95)"
  },
  {
      "name": "PEARSON",
      "category": "統計",
      "description": "データセットに対するピアソンの積率相関係数 r を計算します。",
      "syntax": "PEARSON(データ_y, データ_x)",
      "example": "PEARSON(A1:A10, B1:B10)"
  },
  {
      "name": "PERCENTILE",
      "category": "統計",
      "description": "データセットの特定のパーセンタイルにおける値を返します。",
      "syntax": "PERCENTILE(データ, パーセンタイル)",
      "example": "PERCENTILE(A1:A10, 0.75)"
  },
  {
      "name": "PERMUT",
      "category": "統計",
      "description": "特定のサイズの標本の集まりからいくつかの標本を選択するときの、順序を考慮した組み合わせの数を返します。",
      "syntax": "PERMUT(n, k)",
      "example": "PERMUT(5, 2)"
  },
  {
      "name": "POISSON",
      "category": "統計",
      "description": "指定した値と平均値に対するポアソン分布関数（またはポアソン累積分布関数）の値を返します。",
      "syntax": "POISSON(x, 平均, 累積)",
      "example": "POISSON(3, 2, TRUE)"
  },
  {
      "name": "PROB",
      "category": "統計",
      "description": "一連の値と対応する確率を使用して、無作為に選択された値が上限と下限の間に収まる確率を求めます。",
      "syntax": "PROB(データ, 確率, 下限, 上限)",
      "example": "PROB(A1:A10, B1:B10, 2, 5)"
  },
  {
      "name": "QUARTILE",
      "category": "統計",
      "description": "データセットの特定の四分位に最も近い値を返します。",
      "syntax": "QUARTILE(データ, 四分位数)",
      "example": "QUARTILE(A1:A10, 1)"
  },
  {
      "name": "RANK",
      "category": "統計",
      "description": "データセット内の特定の値の順位を返します。",
      "syntax": "RANK(値, データ, 昇順)",
      "example": "RANK(A1, A1:A10, FALSE)"
  },
  {
      "name": "RSQ",
      "category": "統計",
      "description": "データセットに対するピアソンの積率相関係数 r の二乗を計算します。",
      "syntax": "RSQ(データ_y, データ_x)",
      "example": "RSQ(A1:A10, B1:B10)"
  },
  {
      "name": "SKEW",
      "category": "統計",
      "description": "データセットの歪度を計算します。歪度は、平均値周辺におけるデータセットの対称度を表します。",
      "syntax": "SKEW(値1, 値2)",
      "example": "SKEW(A1:A10)"
  },
  {
      "name": "SLOPE",
      "category": "統計",
      "description": "データセットの線形回帰から得られる直線の傾きを計算します。",
      "syntax": "SLOPE(データ_y, データ_x)",
      "example": "SLOPE(A1:A10, B1:B10)"
  },
  {
      "name": "SMALL",
      "category": "統計",
      "description": "データセットから n 番目に小さい要素を返します（n は指定した数値です）。",
      "syntax": "SMALL(データ, n)",
      "example": "SMALL(A1:A10, 2)"
  },
  {
      "name": "STANDARDIZE",
      "category": "統計",
      "description": "特定の分布の平均と標準偏差を使用して、確率変数の正規化された値を計算します。",
      "syntax": "STANDARDIZE(値, 平均, 標準偏差)",
      "example": "STANDARDIZE(2, 0, 1)"
  },
  {
      "name": "STEYX",
      "category": "統計",
      "description": "データセットの回帰における個別の x に対する y の予測値の標準誤差を計算します。",
      "syntax": "STEYX(データ_y, データ_x)",
      "example": "STEYX(A1:A10, B1:B10)"
  },
  {
      "name": "TRIMMEAN",
      "category": "統計",
      "description": "データセットの上限と下限から一定の割合のデータを除外し、残りのデータセットの平均値を計算します。",
      "syntax": "TRIMMEAN(データ, 除外の割合)",
      "example": "TRIMMEAN(A1:A10, 0.2)"
  },
  {
      "name": "VARA",
      "category": "統計",
      "description": "標本に基づいて分散の推定値を計算します。テキストの値は 0 となります。",
      "syntax": "VARA(値1, 値2)",
      "example": "VARA(A1:A10)"
  },
  {
      "name": "WEIBULL",
      "category": "統計",
      "description": "指定した形状や尺度について、ワイブル分布関数（またはワイブル累積分布関数）の値を返します。",
      "syntax": "WEIBULL(x, 形状, 尺度, 累積)",
      "example": "WEIBULL(1.5, 2, 3, TRUE)"
  },
  {
      "name": "ZTEST",
      "category": "統計",
      "description": "標準偏差を使用して z 検定の両側 p 値を返します。",
      "syntax": "ZTEST(データ, 値, 標準偏差)",
      "example": "ZTEST(A1:A10, 2, 1)"
  },
  {
      "name": "AVERAGE.WEIGHTED",
      "category": "統計",
      "description": "指定した値と対応するウェイトに基づいて、一連の値の加重平均値を求めます。",
      "syntax": "AVERAGE.WEIGHTED(値, ウェイト, [追加の値], [追加のウェイト])",
      "example": "AVERAGE.WEIGHTED(A1:A10, B1:B10)"
  },
  {
      "name": "AVERAGEIF",
      "category": "統計",
      "description": "条件に基づいて範囲の平均値を返します。",
      "syntax": "AVERAGEIF(条件範囲, 条件, [平均範囲])",
      "example": "AVERAGEIF(A1:A10, \">5\", B1:B10)"
  },
  {
      "name": "AVERAGEIFS",
      "category": "統計",
      "description": "複数の条件の基づいて範囲の平均を返します。",
      "syntax": "AVERAGEIFS(平均範囲, 条件範囲1, 条件1, [条件範囲2, 条件2, ...])",
      "example": "AVERAGEIFS(B1:B10, A1:A10, \">5\", C1:C10, \"<10\")"
  },
  {
      "name": "BETA.DIST",
      "category": "統計",
      "description": "指定した値のβ分布関数の確率を返します。",
      "syntax": "BETA.DIST(値, α, β, 累積, 下限, 上限)",
      "example": "BETA.DIST(0.5, 2, 5, TRUE, 0, 1)"
  },
  {
      "name": "BETA.INV",
      "category": "統計",
      "description": "指定した確率に対するβ分布の逆関数の値を返します。",
      "syntax": "BETA.INV(確率, α, β, 下限, 上限)",
      "example": "BETA.INV(0.95, 2, 5, 0, 1)"
  },
  {
      "name": "BETADIST",
      "category": "統計",
      "description": "指定された値のβ分布関数によって定義された確率を返します。",
      "syntax": "BETADIST(値, α, β, 下限, 上限)",
      "example": "BETADIST(0.5, 2, 5, 0, 1)"
  },
  {
      "name": "BINOM.DIST",
      "category": "統計",
      "description": "指定した成功数、試行回数、成功率に基づき、二項分布関数（または二項累積分布関数）の値を返します。",
      "syntax": "BINOM.DIST(成功数, 試行回数, 成功率, 累積)",
      "example": "BINOM.DIST(3, 10, 0.5, TRUE)"
  },
  {
      "name": "BINOM.INV",
      "category": "統計",
      "description": "指定した確率に対する二項分布の逆関数の値を返します。",
      "syntax": "BINOM.INV(試行回数, 成功率, 目標確率)",
      "example": "BINOM.INV(10, 0.5, 0.9)"
  },
  {
      "name": "CHIDIST",
      "category": "統計",
      "description": "カイ二乗分布の右側確率を計算します。仮説検定でよく使用されます。",
      "syntax": "CHIDIST(x, 自由度)",
      "example": "CHIDIST(2.5, 5)"
  },
  {
      "name": "CHIINV",
      "category": "統計",
      "description": "カイ二乗分布の右側確率から逆関数を計算します。",
      "syntax": "CHIINV(確率, 自由度)",
      "example": "CHIINV(0.05, 5)"
  },
  {
      "name": "CHISQ.DIST",
      "category": "統計",
      "description": "カイ二乗分布の左側確率を計算します。仮説検定でよく使用されます。",
      "syntax": "CHISQ.DIST(x, 自由度, 関数形式)",
      "example": "CHISQ.DIST(2.5, 5, TRUE)"
  },
  {
      "name": "CHISQ.DIST.RT",
      "category": "統計",
      "description": "カイ二乗分布の右側確率を計算します。仮説検定でよく使用されます。",
      "syntax": "CHISQ.DIST.RT(x, 自由度)",
      "example": "CHISQ.DIST.RT(2.5, 5)"
  },
  {
      "name": "CHISQ.INV",
      "category": "統計",
      "description": "カイ二乗分布の左側確率の逆関数値を計算します。",
      "syntax": "CHISQ.INV(確率, 自由度)",
      "example": "CHISQ.INV(0.95, 5)"
  },
  {
      "name": "CHISQ.INV.RT",
      "category": "統計",
      "description": "カイ二乗分布の右側確率から逆関数の値を計算します。",
      "syntax": "CHISQ.INV.RT(確率, 自由度)",
      "example": "CHISQ.INV.RT(0.05, 5)"
  },
  {
      "name": "CHISQ.TEST",
      "category": "統計",
      "description": "2つのデータ範囲をもとにピアソンのカイ二乗検定を行い、その確率を返します。",
      "syntax": "CHISQ.TEST(実測値範囲, 期待値範囲)",
      "example": "CHISQ.TEST(A1:B10, C1:D10)"
  },
  {
      "name": "CHITEST",
      "category": "統計",
      "description": "2 つのデータ範囲をもとにピアソンのカイ二乗検定を行い、その確率を返します。",
      "syntax": "CHITEST(実測値範囲, 期待値範囲)",
      "example": "CHITEST(A1:B10, C1:D10)"
  },
  {
      "name": "CONFIDENCE.NORM",
      "category": "統計",
      "description": "正規分布に対する信頼区間の幅の 1/2 を計算します。",
      "syntax": "CONFIDENCE.NORM(アルファ, 標準偏差, 母集団サイズ)",
      "example": "CONFIDENCE.NORM(0.05, 2.5, 100)"
  },
  {
      "name": "CONFIDENCE.T",
      "category": "統計",
      "description": "スチューデント t 分布について信頼区間の幅の 1/2 を計算します。",
      "syntax": "CONFIDENCE.T(α, 標準偏差, サイズ)",
      "example": "CONFIDENCE.T(0.05, 2.5, 100)"
  },
  {
      "name": "COVARIANCE.P",
      "category": "統計",
      "description": "母集団全体に基づく共分散を計算します。",
      "syntax": "COVARIANCE.P(データ_y, データ_x)",
      "example": "COVARIANCE.P(A1:A10, B1:B10)"
  },
  {
      "name": "COVARIANCE.S",
      "category": "統計",
      "description": "データセット（母集団全体から抜き取った標本）の共分散を計算します。",
      "syntax": "COVARIANCE.S(データ_y, データ_x)",
      "example": "COVARIANCE.S(A1:A10, B1:B10)"
  },
  {
      "name": "EXPON.DIST",
      "category": "統計",
      "description": "指定した LAMBDA と値の指数分布関数の値を返します。",
      "syntax": "EXPON.DIST(x, LAMBDA, 累積)",
      "example": "EXPON.DIST(2, 0.5, TRUE)"
  },
  {
      "name": "EXPONDIST",
      "category": "統計",
      "description": "EXPON.DIST と同じ指数分布関数を返します。",
      "syntax": "EXPONDIST(x, LAMBDA, 累積)",
      "example": "EXPONDIST(2, 0.5, TRUE)"
  },
  {
      "name": "F.DIST",
      "category": "統計",
      "description": "指定した x を代入して、2 つのデータセットの F 分布の左側確率を計算します。",
      "syntax": "F.DIST(x, 自由度1, 自由度2, 関数形式)",
      "example": "F.DIST(2.5, 5, 10, TRUE)"
  },
  {
      "name": "F.INV",
      "category": "統計",
      "description": "F 分布の左側確率の逆関数値を計算します。",
      "syntax": "F.INV(確率, 自由度1, 自由度2)",
      "example": "F.INV(0.95, 5, 10)"
  },
  {
      "name": "F.INV.RT",
      "category": "統計",
      "description": "F 分布の右側確率の逆関数値を計算します。",
      "syntax": "F.INV.RT(確率, 自由度1, 自由度2)",
      "example": "F.INV.RT(0.05, 5, 10)"
  },
  {
      "name": "F.TEST",
      "category": "統計",
      "description": "F 検定を実施し、2 つのデータセットの分散が同じかどうかを判定するための確率を返します。",
      "syntax": "F.TEST(範囲1, 範囲2)",
      "example": "F.TEST(A1:A10, B1:B10)"
  },
  {
      "name": "FDIST",
      "category": "統計",
      "description": "F 分布の右側確率を計算します。",
      "syntax": "FDIST(x, 自由度1, 自由度2)",
      "example": "FDIST(2.5, 5, 10)"
  },
  {
      "name": "FINV",
      "category": "統計",
      "description": "F 分布の右側確率から逆関数を計算します。",
      "syntax": "FINV(確率, 自由度1, 自由度2)",
      "example": "FINV(0.05, 5, 10)"
  },
  {
      "name": "FORECAST.LINEAR",
      "category": "統計",
      "description": "データセットの線形回帰に基づいて、指定した x 値に対する y 値の将来値を計算します。",
      "syntax": "FORECAST.LINEAR(x, データ_y, データ_x)",
      "example": "FORECAST.LINEAR(15, A1:A10, B1:B10)"
  },
  {
      "name": "FTEST",
      "category": "統計",
      "description": "等分散かどうかを調べる F 検定に関連する確率を返します。",
      "syntax": "FTEST(範囲1, 範囲2)",
      "example": "FTEST(A1:A10, B1:B10)"
  },
  {
      "name": "GAMMA",
      "category": "統計",
      "description": "指定された数値に対するガンマ関数の値を返します。",
      "syntax": "GAMMA(数値)",
      "example": "GAMMA(5)"
  },
  {
      "name": "GAMMA.DIST",
      "category": "統計",
      "description": "ガンマ分布（2 つのパラメータの連続確率分布）を計算します。",
      "syntax": "GAMMA.DIST(x, α, β, 累積)",
      "example": "GAMMA.DIST(2, 3, 2, TRUE)"
  },
  {
      "name": "GAMMADIST",
      "category": "統計",
      "description": "ガンマ分布（2 つのパラメータの連続確率分布）を計算します。",
      "syntax": "GAMMADIST(x, α, β, 累積)",
      "example": "GAMMADIST(2, 3, 2, TRUE)"
  },
  {
      "name": "GAMMAINV",
      "category": "統計",
      "description": "指定した確率、アルファ パラメータ、ベータ パラメータに対して、ガンマ累積分布の逆関数の値を返します。",
      "syntax": "GAMMAINV(確率, アルファ, ベータ)",
      "example": "GAMMAINV(0.95, 2, 3)"
  },
  {
      "name": "HYPGEOM.DIST",
      "category": "統計",
      "description": "指定した試行数、母集団のサイズ、母集団の成功数から、非復元抽出で一定の試行が成功する確率を計算します。",
      "syntax": "HYPGEOM.DIST(成功数, 試行回数, 母集団の成功数, 母集団サイズ)",
      "example": "HYPGEOM.DIST(2, 10, 5, 50)"
  },
  {
      "name": "LOGNORM.DIST",
      "category": "統計",
      "description": "特定の平均値と標準偏差を使用して、指定した値における対数正規累積分布の値を返します。",
      "syntax": "LOGNORM.DIST(x, 平均, 標準偏差)",
      "example": "LOGNORM.DIST(2, 1, 0.5, TRUE)"
  },
  {
      "name": "LOGNORM.INV",
      "category": "統計",
      "description": "特定の平均値と標準偏差を使用して、指定した確率における対数正規分布の逆関数の値を返します。",
      "syntax": "LOGNORM.INV(x, 平均, 標準偏差)",
      "example": "LOGNORM.INV(0.95, 1, 0.5)"
  },
  {
      "name": "MARGINOFERROR",
      "category": "統計",
      "description": "指定された値の範囲と信頼レベルを基に、ランダムな標本誤差の量を計算します。",
      "syntax": "MARGINOFERROR(範囲, 信頼レベル)",
      "example": "MARGINOFERROR(A1:A100, 0.95)"
  },
  {
      "name": "MAXIFS",
      "category": "統計",
      "description": "セル範囲を一連の条件で絞り込み、その最大値を返します。",
      "syntax": "MAXIFS(範囲, 条件範囲1, 条件1, [条件範囲2, 条件2], …)",
      "example": "MAXIFS(A1:A10, B1:B10, \">5\", C1:C10, \"<10\")"
  },
  {
      "name": "MINIFS",
      "category": "統計",
      "description": "セル範囲を一連の条件で絞り込み、その最小値を返します。",
      "syntax": "MINIFS(範囲, 条件範囲1, 条件1, [条件範囲2, 条件2], …)",
      "example": "MINIFS(A1:A10, B1:B10, \">5\", C1:C10, \"<10\")"
  },
  {
      "name": "MODE.MULT",
      "category": "統計",
      "description": "データセットにおける最頻値（複数）を返します。",
      "syntax": "MODE.MULT(値1, 値2)",
      "example": "MODE.MULT(A1:A10)"
  },
  {
      "name": "MODE.SNGL",
      "category": "統計",
      "description": "データセットにおける単一の最頻値を返します。",
      "syntax": "MODE.SNGL(値1, [値2, ...])",
      "example": "MODE.SNGL(A1:A10)"
  },
  {
      "name": "NEGBINOM.DIST",
      "category": "統計",
      "description": "独立試行で成功率が一定のとき、特定の回数の試行が成功する前に、指定した回数を失敗する確率を計算します。",
      "syntax": "NEGBINOM.DIST(失敗数, 成功数, 成功率)",
      "example": "NEGBINOM.DIST(5, 10, 0.5, TRUE)"
  },
  {
      "name": "NORM.DIST",
      "category": "統計",
      "description": "指定した値、平均値、標準偏差に対する正規分布関数（または正規累積分布関数）の値を返します。",
      "syntax": "NORM.DIST(x, 平均, 標準偏差, 累積)",
      "example": "NORM.DIST(2, 0, 1, TRUE)"
  },
  {
      "name": "NORM.INV",
      "category": "統計",
      "description": "指定した値、平均値、標準偏差に対する正規分布の逆関数の値を返します。",
      "syntax": "NORM.INV(x, 平均, 標準偏差)",
      "example": "NORM.INV(0.95, 0, 1)"
  },
  {
      "name": "NORM.S.DIST",
      "category": "統計",
      "description": "指定した値に対する標準正規累積分布関数の値を返します。",
      "syntax": "NORM.S.DIST(x)",
      "example": "NORM.S.DIST(1.5)"
  },
  {
      "name": "NORM.S.INV",
      "category": "統計",
      "description": "指定した値に対する標準正規分布の逆関数の値を返します。",
      "syntax": "NORM.S.INV(x)",
      "example": "NORM.S.INV(0.95)"
  },
  {
      "name": "PERCENTILE.EXC",
      "category": "統計",
      "description": "データセット内の指定されたパーセンタイルにおける値（0 と 1 を除く）を返します。",
      "syntax": "PERCENTILE.EXC(データ, パーセンタイル)",
      "example": "PERCENTILE.EXC(A1:A10, 0.75)"
  },
  {
      "name": "PERCENTILE.INC",
      "category": "統計",
      "description": "データセット内の指定されたパーセンタイルにおける値を返します。",
      "syntax": "PERCENTILE.INC(データ, パーセンタイル)",
      "example": "PERCENTILE.INC(A1:A10, 0.75)"
  },
  {
      "name": "PERCENTRANK",
      "category": "統計",
      "description": "データセット内の指定した値の百分率による順位（パーセンタイル）を返します。",
      "syntax": "PERCENTRANK(データ, 値, [有効桁])",
      "example": "PERCENTRANK(A1:A10, 5, 2)"
  },
  {
      "name": "PERCENTRANK.EXC",
      "category": "統計",
      "description": "データセット内の指定された値を除外して、0～1 の百分率による順位（パーセンタイル）を返します。",
      "syntax": "PERCENTRANK.EXC(データ, 値, [有効桁])",
      "example": "PERCENTRANK.EXC(A1:A10, 5, 2)"
  },
  {
      "name": "PERCENTRANK.INC",
      "category": "統計",
      "description": "データセット内の指定された値を含めて、0～1 の百分率による順位（パーセンタイル）を返します。",
      "syntax": "PERCENTRANK.INC(データ, 値, [有効桁])",
      "example": "PERCENTRANK.INC(A1:A10, 5, 2)"
  },
  {
      "name": "PERMUTATIONA",
      "category": "統計",
      "description": "オブジェクトの総数から、指定された数のオブジェクト群を抜き取る場合（反復あり）の順列の数を返します。",
      "syntax": "PERMUTATIONA(数値, 抜き取り数)",
      "example": "PERMUTATIONA(5, 3)"
  },
  {
      "name": "POISSON.DIST",
      "category": "統計",
      "description": "指定した値と平均値に対するポアソン分布関数（またはポアソン累積分布関数）の値を返します。",
      "syntax": "POISSON.DIST(x, 平均, [累積])",
      "example": "POISSON.DIST(3, 2, TRUE)"
  },
  {
      "name": "QUARTILE.EXC",
      "category": "統計",
      "description": "データセットの指定された四分位に最も近い値を返します（0 と 4 を除く）。",
      "syntax": "QUARTILE.EXC(データ, 四分位数)",
      "example": "QUARTILE.EXC(A1:A10, 1)"
  },
  {
      "name": "QUARTILE.INC",
      "category": "統計",
      "description": "データセットの指定された四分位に最も近い値を返します。",
      "syntax": "QUARTILE.INC(データ, 四分位数)",
      "example": "QUARTILE.INC(A1:A10, 1)"
  },
  {
      "name": "RANK.AVG",
      "category": "統計",
      "description": "データセット内の指定された値の順位を返します。データセット内に同じ値の複数のエントリがある場合は、エントリの平均順位を返します。",
      "syntax": "RANK.AVG(値, データ, [昇順])",
      "example": "RANK.AVG(A1, A1:A10, FALSE)"
  },
  {
      "name": "RANK.EQ",
      "category": "統計",
      "description": "データセット内の指定された値の順位を返します。データセット内に同じ値の複数のエントリがある場合は、エントリの最上位を返します。",
      "syntax": "RANK.EQ(値, データ, [昇順])",
      "example": "RANK.EQ(A1, A1:A10, FALSE)"
  },
  {
      "name": "SKEW.P",
      "category": "統計",
      "description": "母集団全体を表すデータセットの歪度を計算します。",
      "syntax": "SKEW.P(値1, 値2)",
      "example": "SKEW.P(A1:A10)"
  },
  {
      "name": "STDEV",
      "category": "統計",
      "description": "標本に基づいて標準偏差の推定値を計算します。",
      "syntax": "STDEV(値1, 値2)",
      "example": "STDEV(A1:A10)"
  },
  {
      "name": "STDEV.P",
      "category": "統計",
      "description": "母集団全体に基づいて標準偏差を計算します。",
      "syntax": "STDEV.P(値1, [値2, ...])",
      "example": "STDEV.P(A1:A10)"
  },
  {
      "name": "STDEV.S",
      "category": "統計",
      "description": "標本に基づいて標準偏差を計算します。",
      "syntax": "STDEV.S(値1, [値2, ...])",
      "example": "STDEV.S(A1:A10)"
  },
  {
      "name": "STDEVA",
      "category": "統計",
      "description": "テキストの値を 0 として、標本に基づいて標準偏差の推定値を計算します。",
      "syntax": "STDEVA(値1, 値2)",
      "example": "STDEVA(A1:A10)"
  },
  {
      "name": "STDEVP",
      "category": "統計",
      "description": "母集団全体に基づいて標準偏差の推定値を計算します。",
      "syntax": "STDEVP(値1, 値2)",
      "example": "STDEVP(A1:A10)"
  },
  {
      "name": "STDEVPA",
      "category": "統計",
      "description": "テキストの値を 0 として、母集団全体に基づいて標準偏差の推定値を計算します。",
      "syntax": "STDEVPA(値1, 値2)",
      "example": "STDEVPA(A1:A10)"
  },
  {
      "name": "T.DIST",
      "category": "統計",
      "description": "値 x に対するスチューデント t 分布の右側確率を返します。",
      "syntax": "T.DIST(x, 自由度, 関数形式)",
      "example": "T.DIST(1.5, 10, TRUE)"
  },
  {
      "name": "T.DIST.2T",
      "category": "統計",
      "description": "値 x に対するスチューデント t 分布の両側確率を返します。",
      "syntax": "T.DIST.2T(x, 自由度)",
      "example": "T.DIST.2T(1.5, 10)"
  },
  {
      "name": "T.DIST.RT",
      "category": "統計",
      "description": "値 x に対するスチューデント t 分布の右側確率を返します。",
      "syntax": "T.DIST.RT(x, 自由度)",
      "example": "T.DIST.RT(1.5, 10)"
  },
  {
      "name": "T.INV",
      "category": "統計",
      "description": "t 分布のマイナスの左側逆関数を計算します。",
      "syntax": "T.INV(確率, 自由度)",
      "example": "T.INV(0.05, 10)"
  },
  {
      "name": "T.INV.2T",
      "category": "統計",
      "description": "t 分布の両側逆関数を計算します。",
      "syntax": "T.INV.2T(確率, 自由度)",
      "example": "T.INV.2T(0.05, 10)"
  },
  {
      "name": "T.TEST",
      "category": "統計",
      "description": "t 検定を実施し、2 つのデータセットの平均が統計的に有意に異なるかどうかを判定するための確率を返します。",
      "syntax": "T.TEST(範囲1, 範囲2, 尾部, 種類)",
      "example": "T.TEST(A1:A10, B1:B10, 2, 1)"
  },
  {
      "name": "TDIST",
      "category": "統計",
      "description": "指定された入力データ（x）を用いて、スチューデントの t 分布の確率を計算します。",
      "syntax": "TDIST(x, 自由度, 尾部)",
      "example": "TDIST(1.5, 10, 2)"
  },
  {
      "name": "TINV",
      "category": "統計",
      "description": "t 分布の両側逆関数を計算します。",
      "syntax": "TINV(確率, 自由度)",
      "example": "TINV(0.05, 10)"
  },
  {
      "name": "TTEST",
      "category": "統計",
      "description": "t 検定に関連する確率を返します。2 つの標本が平均値の等しい 2 つの母集団から取り出されたものかどうかを決定します。",
      "syntax": "TTEST(配列 1, 配列 2, 尾部, 検定の種類)",
      "example": "TTEST(A1:A10, B1:B10, 2, 1)"
  },
  {
      "name": "VAR",
      "category": "統計",
      "description": "標本に基づいて分散の推定値を計算します。",
      "syntax": "VAR(値1, 値2)",
      "example": "VAR(A1:A10)"
  },
  {
      "name": "VAR.P",
      "category": "統計",
      "description": "母集団全体に基づいて分散を計算します。",
      "syntax": "VAR.P(値1, [値2, ...])",
      "example": "VAR.P(A1:A10)"
  },
  {
      "name": "VAR.S",
      "category": "統計",
      "description": "標本に基づいて分散の推定値を計算します。",
      "syntax": "VAR.S(値1, [値2, ...])",
      "example": "VAR.S(A1:A10)"
  },
  {
      "name": "VARP",
      "category": "統計",
      "description": "母集団全体に基づいて分散を計算します。",
      "syntax": "VARP(値1, 値2)",
      "example": "VARP(A1:A10)"
  },
  {
      "name": "VARPA",
      "category": "統計",
      "description": "テキストの値を 0 として、母集団全体に基づいて分散を計算します。",
      "syntax": "VARPA(値1, 値2)",
      "example": "VARPA(A1:A10)"
  },
  {
      "name": "WEIBULL.DIST",
      "category": "統計",
      "description": "指定した形状や尺度について、ワイブル分布関数（またはワイブル累積分布関数）の値を返します。",
      "syntax": "WEIBULL.DIST(x, 形状, 尺度, 累積)",
      "example": "WEIBULL.DIST(1.5, 2, 3, TRUE)"
  },
  {
      "name": "Z.TEST",
      "category": "統計",
      "description": "標準偏差を使用して z 検定の両側 p 値を返します。",
      "syntax": "Z.TEST(データ, 値, [標準偏差])",
      "example": "Z.TEST(A1:A10, 2, 1)"
  },
  {
      "name": "DATE",
      "category": "日付",
      "description": "指定した年、月、日を日付に変換します。",
      "syntax": "DATE(年, 月, 日)",
      "example": "DATE(2024, 5, 10)"
  },
  {
      "name": "DATEVALUE",
      "category": "日付",
      "description": "指定した日付の既知の形式の文字列をシリアル値に変換します。",
      "syntax": "DATEVALUE(日付の文字列)",
      "example": "DATEVALUE(\"10-May-2024\")"
  },
  {
      "name": "DAY",
      "category": "日付",
      "description": "その月の指定した日付に対応する日を数値形式で返します。",
      "syntax": "DAY(日付)",
      "example": "DAY(\"2024-05-10\")"
  },
  {
      "name": "DAYS360",
      "category": "日付",
      "description": "1 年を 360 日として（利率の計算で使用されます）、2 つの日付の間の日数を返します。",
      "syntax": "DAYS360(開始日, 終了日, 方法)",
      "example": "DAYS360(\"2024-01-01\", \"2024-12-31\", FALSE)"
  },
  {
      "name": "EDATE",
      "category": "日付",
      "description": "起算日から指定した月数だけ前または後ろの日付を返します。",
      "syntax": "EDATE(開始日, 月数)",
      "example": "EDATE(\"2024-05-10\", 3)"
  },
  {
      "name": "EOMONTH",
      "category": "日付",
      "description": "起算日から指定した月数だけ前または後ろの月の最終日の日付を返します。",
      "syntax": "EOMONTH(開始日, 月数)",
      "example": "EOMONTH(\"2024-05-10\", 3)"
  },
  {
      "name": "HOUR",
      "category": "日付",
      "description": "指定した時刻の時引数を数値形式で返します。",
      "syntax": "HOUR(時刻)",
      "example": "HOUR(\"14:30:15\")"
  },
  {
      "name": "MINUTE",
      "category": "日付",
      "description": "指定した時刻の分引数を数値形式で返します。",
      "syntax": "MINUTE(時刻)",
      "example": "MINUTE(\"14:30:15\")"
  },
  {
      "name": "MONTH",
      "category": "日付",
      "description": "その年の指定した日付に対応する月を数値形式で返します。",
      "syntax": "MONTH(日付)",
      "example": "MONTH(\"2024-05-10\")"
  },
  {
      "name": "NETWORKDAYS",
      "category": "日付",
      "description": "指定した 2 つの日付の間に含まれる就業日数を返します。",
      "syntax": "NETWORKDAYS(開始日, 終了日, 休日)",
      "example": "NETWORKDAYS(\"2024-01-01\", \"2024-12-31\", A1:A5)"
  },
  {
      "name": "NOW",
      "category": "日付",
      "description": "現在の日付と時刻に対応するシリアル値を返します。",
      "syntax": "NOW()",
      "example": "NOW()"
  },
  {
      "name": "SECOND",
      "category": "日付",
      "description": "指定した時刻の秒引数を数値形式で返します。",
      "syntax": "SECOND(時刻)",
      "example": "SECOND(\"14:30:15\")"
  },
  {
      "name": "TIME",
      "category": "日付",
      "description": "指定した時、分、秒を時刻に変換します。",
      "syntax": "TIME(時刻, 分, 秒)",
      "example": "TIME(14, 30, 15)"
  },
  {
      "name": "TODAY",
      "category": "日付",
      "description": "現在の日付に対応するシリアル値を返します。",
      "syntax": "TODAY()",
      "example": "TODAY()"
  },
  {
      "name": "WEEKDAY",
      "category": "日付",
      "description": "指定した日付に対応する曜日を数値で返します。",
      "syntax": "WEEKDAY(日付, 種類)",
      "example": "WEEKDAY(\"2024-05-10\", 1)"
  },
  {
      "name": "YEAR",
      "category": "日付",
      "description": "特定の日付によって指定した年を返します。",
      "syntax": "YEAR(日付)",
      "example": "YEAR(\"2024-05-10\")"
  },
  {
      "name": "DATEDIF",
      "category": "日付",
      "description": "2 つの日付の間の日数、月数、年数を計算します。",
      "syntax": "DATEDIF(開始日, 終了日, 単位)",
      "example": "DATEDIF(\"2023-01-01\", \"2024-01-01\", \"Y\")"
  },
  {
      "name": "DAYS",
      "category": "日付",
      "description": "2 つの日付間の日数を返します。",
      "syntax": "DAYS(終了日, 開始日)",
      "example": "DAYS(\"2024-05-10\", \"2024-01-01\")"
  },
  {
      "name": "EPOCHTODATE",
      "category": "日付",
      "description": "Unix エポック タイムスタンプ（秒、ミリ秒、またはマイクロ秒）を UTC の日時に変換します。",
      "syntax": "EPOCHTODATE(タイムスタンプ, [単位])",
      "example": "EPOCHTODATE(1700000000, \"s\")"
  },
  {
      "name": "ISOWEEKNUM",
      "category": "日付",
      "description": "指定された日付に該当する、その年の ISO 週番号を返します。",
      "syntax": "ISOWEEKNUM(日付)",
      "example": "ISOWEEKNUM(\"2024-05-10\")"
  },
  {
      "name": "TIMEVALUE",
      "category": "日付",
      "description": "1 日 24 時間のうちの、時刻が表す割合を返します。",
      "syntax": "TIMEVALUE(時刻文字列)",
      "example": "TIMEVALUE(\"14:30:00\")"
  },
  {
      "name": "WEEKNUM",
      "category": "日付",
      "description": "指定した日付が該当する年間の週番号を表す数値を返します。",
      "syntax": "WEEKNUM(日付, [種類])",
      "example": "WEEKNUM(\"2024-05-10\", 1)"
  },
  {
      "name": "WORKDAY",
      "category": "日付",
      "description": "指定された就業日数をもとに終了日を計算します。",
      "syntax": "WORKDAY(開始日, 日数, [休日])",
      "example": "WORKDAY(\"2024-05-10\", 10, A1:A5)"
  },
  {
      "name": "YEARFRAC",
      "category": "日付",
      "description": "指定した日数の計算方法を使用して、2 つの日付の間の年数（1 年に満たない年も含む）を返します。",
      "syntax": "YEARFRAC(開始日, 終了日, [日数の計算方法])",
      "example": "YEARFRAC(\"2024-01-01\", \"2024-12-31\", 1)"
  },
  {
      "name": "FLATTEN",
      "category": "配列",
      "description": "複数の範囲を 1 つの列に統合し、すべての要素をフラット化して返します。",
      "syntax": "FLATTEN(範囲1, [範囲2, ...])",
      "example": "FLATTEN(A1:C3)"
  },
  {
      "name": "FREQUENCY",
      "category": "配列",
      "description": "1 列の配列の頻度分布を、特定のクラスにグループ化して返します。",
      "syntax": "FREQUENCY(データ, クラス)",
      "example": "FREQUENCY(A1:A10, B1:B3)"
  },
  {
      "name": "GROWTH",
      "category": "配列",
      "description": "指数関数的な成長トレンドについての一部のデータを使用して、理想的な指数関数的な成長トレンドを当てはめるか、将来値を予測します。",
      "syntax": "GROWTH(既知データ_y, 既知データ_x, 新規データ_x, b)",
      "example": "GROWTH(A1:A10, B1:B10, C1:C5, TRUE)"
  },
  {
      "name": "LINEST",
      "category": "配列",
      "description": "線形トレンドの一部のデータから、最小二乗法を使用して理想的な線形トレンドを表す複数のパラメータを計算します。",
      "syntax": "LINEST(既知データ_y, 既知データ_x, b, 詳細)",
      "example": "LINEST(A1:A10, B1:B10, TRUE, TRUE)"
  },
  {
      "name": "LOGEST",
      "category": "配列",
      "description": "指数成長曲線についての一部のデータを使用して、最もよく当てはまる理想的な指数成長曲線を表す複数のパラメータを計算します。",
      "syntax": "LOGEST(既知データ_y, 既知データ_x, b, 詳細)",
      "example": "LOGEST(A1:A10, B1:B10, TRUE, TRUE)"
  },
  {
      "name": "MDETERM",
      "category": "配列",
      "description": "配列または範囲として指定した正方行列の行列式を返します。",
      "syntax": "MDETERM(正方行列)",
      "example": "MDETERM(A1:B2)"
  },
  {
      "name": "MINVERSE",
      "category": "配列",
      "description": "配列または範囲として指定した正方行列の逆行列を返します。",
      "syntax": "MINVERSE(正方行列)",
      "example": "MINVERSE(A1:B2)"
  },
  {
      "name": "MMULT",
      "category": "配列",
      "description": "配列または範囲として指定した 2 つの行列の行列積を計算します。",
      "syntax": "MMULT(行列1, 行列2)",
      "example": "MMULT(A1:B2, C1:D2)"
  },
  {
      "name": "SUMPRODUCT",
      "category": "配列",
      "description": "2 つの同サイズの配列または範囲にある対応する要素の積を計算し、その合計を返します。",
      "syntax": "SUMPRODUCT(配列1, 配列2)",
      "example": "SUMPRODUCT(A1:A10, B1:B10)"
  },
  {
      "name": "SUMX2MY2",
      "category": "配列",
      "description": "2 つの配列内の値について、平方差の合計を計算します。",
      "syntax": "SUMX2MY2(配列_x, 配列_y)",
      "example": "SUMX2MY2(A1:A10, B1:B10)"
  },
  {
      "name": "SUMX2PY2",
      "category": "配列",
      "description": "2 つの配列内の値について、平方和の合計を計算します。",
      "syntax": "SUMX2PY2(配列_x, 配列_y)",
      "example": "SUMX2PY2(A1:A10, B1:B10)"
  },
  {
      "name": "SUMXMY2",
      "category": "配列",
      "description": "2 つの配列の値の差を二乗して、その合計を計算します。",
      "syntax": "SUMXMY2(配列_x, 配列_y)",
      "example": "SUMXMY2(A1:A10, B1:B10)"
  },
  {
      "name": "TRANSPOSE",
      "category": "配列",
      "description": "配列またはセルの範囲の行と列を入れ替えます。",
      "syntax": "TRANSPOSE(配列または範囲)",
      "example": "TRANSPOSE(A1:C3)"
  },
  {
      "name": "TREND",
      "category": "配列",
      "description": "線形トレンドを表すデータの一部から、最小二乗法を使用して理想的な線形トレンドを当てはめるか、将来値を予測します。",
      "syntax": "TREND(既知データ_y, 既知データ_x, 新規データ_x, b)",
      "example": "TREND(A1:A10, B1:B10, C1:C5, TRUE)"
  },
  {
      "name": "ARRAY_CONSTRAIN",
      "category": "配列",
      "description": "配列の結果を指定したサイズに抑えます。",
      "syntax": "ARRAY_CONSTRAIN(入力範囲, 行数, 列数)",
      "example": "ARRAY_CONSTRAIN(A1:D10, 5, 3)"
  },
  {
      "name": "BYCOL",
      "category": "配列",
      "description": "LAMBDA 関数を各列に適用して、配列を列単位でグループ化します。",
      "syntax": "BYCOL(配列または範囲, LAMBDA)",
      "example": "BYCOL(A1:C3, LAMBDA(x, SUM(x)))"
  },
  {
      "name": "BYROW",
      "category": "配列",
      "description": "LAMBDA 関数を各行に適用して、配列を行単位でグループ化します。",
      "syntax": "BYROW(配列または範囲, LAMBDA)",
      "example": "BYROW(A1:C3, LAMBDA(x, SUM(x)))"
  },
  {
      "name": "CHOOSECOLS",
      "category": "配列",
      "description": "既存の範囲で、選択された列から新しい配列を作成します。",
      "syntax": "CHOOSECOLS(配列, 列番号 1, [列番号 2])",
      "example": "CHOOSECOLS(A1:D10, 1, 3)"
  },
  {
      "name": "CHOOSEROWS",
      "category": "配列",
      "description": "既存の範囲で、選択された行から新しい配列を作成します。",
      "syntax": "CHOOSEROWS(配列, 行番号 1, [行番号 2])",
      "example": "CHOOSEROWS(A1:D10, 1, 3)"
  },
  {
      "name": "HSTACK",
      "category": "配列",
      "description": "複数の配列を横方向に順番に結合し、大きい配列にして返します。",
      "syntax": "HSTACK(範囲 1, [範囲 2, ...])",
      "example": "HSTACK(A1:A5, B1:B5)"
  },
  {
      "name": "MAKEARRAY",
      "category": "配列",
      "description": "LAMBDA 関数を適用して計算された値を含む、指定されたディメンションの配列を返します。",
      "syntax": "MAKEARRAY(行, 列, LAMBDA)",
      "example": "MAKEARRAY(3, 3, LAMBDA(r, c, r * c))"
  },
  {
      "name": "MAP",
      "category": "配列",
      "description": "LAMBDA 関数を各値に適用して、指定した配列内の各値を新しい値にマッピングします。",
      "syntax": "MAP(配列1, [配列2, ...], LAMBDA)",
      "example": "MAP(A1:A5, LAMBDA(x, x * 2))"
  },
  {
      "name": "REDUCE",
      "category": "配列",
      "description": "LAMBDA 関数を各値に適用して、配列を累積結果に減らします。",
      "syntax": "REDUCE(初期値, 配列または範囲, LAMBDA)",
      "example": "REDUCE(0, A1:A5, LAMBDA(a, b, a + b))"
  },
  {
      "name": "SCAN",
      "category": "配列",
      "description": "配列をスキャンし、LAMBDA 関数を各値に適用して中間値を生成します。",
      "syntax": "SCAN(初期値, 配列または範囲, LAMBDA)",
      "example": "SCAN(0, A1:A5, LAMBDA(a, b, a + b))"
  },
  {
      "name": "TOCOL",
      "category": "配列",
      "description": "セルの配列または範囲を 1 列に変換します。",
      "syntax": "TOCOL(配列または範囲, [無視], [列でスキャン])",
      "example": "TOCOL(A1:C3)"
  },
  {
      "name": "TOROW",
      "category": "配列",
      "description": "セルの配列または範囲を 1 行に変換します。",
      "syntax": "TOROW(配列または範囲, [無視], [列でスキャン])",
      "example": "TOROW(A1:C3)"
  },
  {
      "name": "VSTACK",
      "category": "配列",
      "description": "複数の範囲を縦方向に順番に結合し、大きい配列にして返します。",
      "syntax": "VSTACK(範囲 1, [範囲 2, ...])",
      "example": "VSTACK(A1:A5, B1:B5)"
  },
  {
      "name": "WRAPCOLS",
      "category": "配列",
      "description": "指定されたセルの行または列の要素を列として配列し、その列が指定された要素数に達すると折り返して次の列に新しい配列を形成します。",
      "syntax": "WRAPCOLS(範囲, 折り返しの値, [代替文字])",
      "example": "WRAPCOLS(A1:A10, 3)"
  },
  {
      "name": "WRAPROWS",
      "category": "配列",
      "description": "指定されたセルの行または列の要素を行として配列し、その行が指定された要素数に達すると折り返して次の行に新しい配列を形成します。",
      "syntax": "WRAPROWS(範囲, 折り返しの値, [代替文字])",
      "example": "WRAPROWS(A1:J1, 3)"
  },
  {
      "name": "AND",
      "category": "論理",
      "description": "すべての引数が論理的に TRUE の場合は TRUE を返します。いずれかの引数が論理的に FALSE である場合は FALSE を返します。",
      "syntax": "AND(論理式1, 論理式2)",
      "example": "AND(A1>10, B1<5)"
  },
  {
      "name": "FALSE",
      "category": "論理",
      "description": "論理値 FALSE を返します。",
      "syntax": "FALSE()",
      "example": "FALSE()"
  },
  {
      "name": "IF",
      "category": "論理",
      "description": "論理式が TRUE の場合はある値を返し、FALSE の場合は別の値を返します。",
      "syntax": "IF(論理式, TRUE値, FALSE値)",
      "example": "IF(A1>10, \"大きい\", \"小さい\")"
  },
  {
      "name": "IFERROR",
      "category": "論理",
      "description": "エラー値でない場合は 1 番目の引数を返します。エラー値である場合は 2 番目の引数を返します（指定した場合）。",
      "syntax": "IFERROR(値, [エラー値])",
      "example": "IFERROR(A1/B1, \"エラー\")"
  },
  {
      "name": "NOT",
      "category": "論理",
      "description": "論理値の逆を返します。TRUE のとき NOT は FALSE を、FALSE のとき NOT は TRUE を返します。",
      "syntax": "NOT(論理式)",
      "example": "NOT(A1>10)"
  },
  {
      "name": "OR",
      "category": "論理",
      "description": "いずれかの引数が論理的に TRUE の場合は TRUE を返します。すべての引数が論理的に FALSE である場合は FALSE を返します。",
      "syntax": "OR(論理式1, 論理式2)",
      "example": "OR(A1>10, B1<5)"
  },
  {
      "name": "TRUE",
      "category": "論理",
      "description": "論理値 TRUE を返します。",
      "syntax": "TRUE()",
      "example": "TRUE()"
  },
  {
      "name": "IFNA",
      "category": "論理",
      "description": "ある特定の値を検証し、#N/A エラーの場合は指定された値を返します。",
      "syntax": "IFNA(値, NAの場合の値)",
      "example": "IFNA(VLOOKUP(100, A1:B10, 2, FALSE), \"データなし\")"
  },
  {
      "name": "IFS",
      "category": "論理",
      "description": "複数の条件を検証し、最初の TRUE 条件に対応する値を返します。",
      "syntax": "IFS(条件1, 値1, [条件2, 値2], …)",
      "example": "IFS(A1>90, \"優\", A1>70, \"良\", A1>50, \"可\", TRUE, \"不可\")"
  },
  {
      "name": "LAMBDA",
      "category": "論理",
      "description": "一連の名前とそれらを使用する数式を指定してカスタム関数を作成し、返します。",
      "syntax": "LAMBDA(名前, 数式)",
      "example": "LAMBDA(x, x^2)(5)"
  },
  {
      "name": "LET",
      "category": "論理",
      "description": "LET を使用すると、式の結果を一時的な変数として割り当てて、計算を簡潔にします。",
      "syntax": "LET(名前1, 値式1, [名前2, 値式2, ...], 数式)",
      "example": "LET(x, 5, y, x+2, y^2)"
  },
  {
      "name": "SWITCH",
      "category": "論理",
      "description": "ケースの一覧に対して式をテストし、最初に一致するケースに対応する値を返します。",
      "syntax": "SWITCH(式, ケース1, 値1, [既定値またはケース2, 値2], …)",
      "example": "SWITCH(A1, 1, \"日曜\", 2, \"月曜\", 3, \"火曜\", \"その他\")"
  },
  {
      "name": "UNIQUE",
      "category": "フィルタ",
      "description": "重複する行を破棄し、指定したソース範囲内の一意の行を返します。",
      "syntax": "UNIQUE(範囲)",
      "example": "UNIQUE(A2:A20)"
  }
];