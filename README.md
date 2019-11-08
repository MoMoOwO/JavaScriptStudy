# JavaScript学习记录

## 简介

1. 跟随视频学习并记录笔记。

2. B站 [视频链接](http://www.bilibili.com/video/av59715096)

3. 外链文档资料大多数来源于W3school，外链资料可作为补充学习，外链连接到大内容的部分需要留意W3school左侧目录附近相关内容。

4. 视频教程分为四部分：
    + JS核心技术 P01-P140
    + JS高级部分 P141-P188
    + ES5、ES6、ES7相关 P189-P222
    + JS模块化

5. *代码按顺序学习，笔记记录也是按顺序，至于最后的安排，等学一段时间再看看*

## JavaScript核心技术

1. [JS三种常用输出](https://www.w3school.com.cn/js/js_output.asp)
    + 警告输出alert();
    + 网页页面中输出document.write();
    + 浏览器控制台输出console.log();

2. JS代码编写位置
    + 标签的事件响应属性中
    + 超链接标签的href属性中
    + script标签中
    + 外部js文件，需要在页面中另外引入

3. [基本语法](https://www.w3school.com.cn/js/js_syntax.asp)
    + [注释](https://www.w3school.com.cn/js/js_comments.asp)：多行注释/* --- */；单行注释：//
    + JS中严格区分大小写
    + JS中每一条语句以分号结尾，如果不写分号，浏览器会自动添加，但是消耗一些系统资源，也可能会加错分号
    + JS中会忽略多个空格和换行，所以我们可以利用空格和换行来格式化代码

4. 字面量与[变量](https://www.w3school.com.cn/js/js_variables.asp)
    + 字面量都是一些不可改变的值，比如1，2，3，4，5；字面量都是可以直接使用的，但是我们一般都不会直接使用字面量
    + 变量可以用来保存字面量，而且变量的值是可以任意改变的；变量更加方便我们使用，所以在开发中都是通过变量去保存字面量而不会直接使用字面量。

5. 标识符
    + 在JS中所有可以由我们自主命名的都可以称为是标识符，如变量名、函数名、属性名
    + 命名规则：标识符中可以含有字母、数字、_、$；标识符不能以数字开头；标识符不能是ES中的关键字或保留字，[JS中保留字与关键字](https://www.jianshu.com/p/65134425040e)
    + 命名规范：标识符一般都采用驼峰命名法，首字母小写，之后每个单词首字母大写，其余字母小写。
    + JS底层保存标识符时实际上是采用Unicode编码，所以理论上，所有的utf-8中含有的内容都可以作为标识符，甚至中文，但是不要使用...

6. [数据类型](https://www.w3school.com.cn/js/js_datatypes.asp)
    + 数据类型指的就是字面量类型
    + 在JS中一共由六种数据类型：String字符串，Number数值，Boolean布尔值，Null空值，Undefined未定义，Object对象  
    其中String、Number、Boolean、Null、Undefined属于基本数据类型，而Object属于引用类型。
    + 运算符typeof来检查一个变量的类型： typeof a;
    + String字符串：  
      (1) 在JS中使用字符串需要使用引号引起来，使用双引号单引号都可以，但是不要混着用，同种类型的引号不能嵌套使用；  
      (2) 如果在字符串中需要输出引号等一些特殊符号，可以使用转义字符\，\"表示", \'表示'，\n表示换行，\t表示制表符，双斜杠表示\，打印斜杠的时候也需要转义。
    + Number数值型：  
      (1) 在JS中所有的数值都是Number类型，包括整数和浮点数(小数)；  
      (2) JS中可以表示的数字的最大值：Number.MAX_VALUE 1.7976931348623157e+308，如果使用Number表示的数据超过了最大值，则会返回Infinity表示正无穷；Number.MIN_VALUE大于0的最小值；  
      (3) NaN是一个特殊的数值，表示Not a Number；在JS中整数运算基本可以保证精确，但是进行浮点数计算可能得到一个不精确的结果。
    + Boolean布尔类型：只有两个值：true(真)、false(假)，用于逻辑判断。
    + Null与Undefined：  
      (1) Null类型的值只有一个，就是null，Null这个值专门用来表示一个为空的对象，null是一个对象，表示一个空对象。  
      (2) Undefined类型的值只有一个，就是undefined，当声明一个变量，但并不给空对象赋值就使用是它的值就是undefined。

7. 强制[类型转换](https://www.w3school.com.cn/js/js_type_conversion.asp)，将其他数据类型转换为String、Number、Boolean类型。
    + 将其他数据类型转换为String：  
      (1) 调用被转换数据类型的toString()方法，null与undefined没有toString()方法，如果调用则报错；  
      (2) 调用String()函数，并将被转换的数据作为参数传入，对于Number和Boolean实际上就是调用toString()方法，但是对于Null和undefined就不会调用toSring()，它会将null直接转换为"null"，将undefined直接转换为"undefined"。  
      (3) 使用+''的当时，即运算时强制转换类型，该方法可以转换Null和Undefined类型。
    + 将其他数据类型转换为Number：  
      (1) 使用Number()函数，字符串->数值：将要转换的数据作为参数传入，如果是纯数字字符串则直接转换为数字，只要字符串中含有非数字就转为NaN，如果字符串是空串或者全是空格的字符串则转换为0; 布尔值->数值：true:1,false:0；Null->数字：0；Undefined->数值：NaN；  
      (2) parseInt()将字符串解析为整数、PaseFloat()将字符串解析为浮点数，此方法专门用于应对字符串转数值，如果对非String类型使用parseInt()或parseFloat()，它会先将其转换为String然后再操作；可以间接使用parseInt()来对小数进行取整。  
      (3) 使用+来进行转换，效果跟Number()函数一样。
    + 将其他的数据类型转换为Boolean：使用Boolean()函数；数值型转布尔型，除了0和NaN是false，其余的都是true；字符串转布尔型，只有空串''是false，其余都是true；null和undefined转为布尔值，都转换为false；对象类型转Boolean也会转换为true。

8. 其他进制数字
    + 在JS中，如果需要表示十六进制的数字，则需要以0x开头；如果需要表示八进制的数字，则需要以0开头；如果要表示二进制数字，则需要以0b开头，但不是所有的浏览器都支持。
    + 像'070'这样的数字型字符串在使用paseInt()进行解析的时候，有的浏览器会当成八进制进行解析(如IE8)，有的浏览器会当成十进制进行解析；可是在parseInt()中传递第二个参数，来制定数字的进制，如parseInt(a, 10)。

9. [运算符](https://www.w3school.com.cn/js/js_operators.asp)(操作符)
    + 通过运算发可以对一个或多个值进行运算，并获取运算结果；比如：typeof 就是运算符，可以来获得一个值的类型，它会将该值的类型以字符串的形式返回。
    + 算数运算符:  
      (1) +：对两个值进行加法运算，并将结果返回，对于非数值型的变量进行加法运算，都会先将其转换为Number再进行加法运算；所有的值与NaN相加结果都是NaN；如果对两个字符串进行加法运算，则会将两个字符串进行拼接操作；任何值跟字符串进行加法运算都会将起转换为字符串在进行拼串操作，可以利用该方法将任意类型的变量转换为String，即使用+''，这是一种隐式的类型转换，由浏览器自动完成，实际上是调用String()函数。  
      (2) -：对两个值进行减法运算，并返回结果；  
      (3) *: 对两个值进行乘法运算  
      (4) /: 对两个值进行除法运算  
      (4) 任何值做 - 、* 、 / 运算时都会自动转换为Number，可以利用这一点做隐式的类型转换，可以通过对一个值进行-0、*1、/1来将其转换为Number，原理跟Number()函数一样，使用起来更方便。  
      (5) %：取模运算(取余数)
    + 一元运算符，只需要一个操作数的运算符：  
      (1) typeof：返回数据类型  
      (2) +：正号，不对数字产生任何影响  
      (3) -：负号，对数字进行取反
      (4) 对于非Number类型的值,会先将他转换为Number,然后在运算；从而可以对一个其他的数据类型使用+来将其转换为number,原理跟Number()函一样。
      (5) ++: 自增，通过自增可以使变量在自身的基础上加1，对于一个变量自增以后变量的值会立即自增1；自增分为两种；a++与++a，++在后先执行语句再自增，++在前先自增再执行语句。  
      (6) --: 自减，通过自减可以使变量在自身的基础上减1，同样存在a--与--a的差异，与自增类似。
    + 逻辑运算符：与或非  
      (1) !: 非,非运算就是对一个布尔值进行取反操作,!true=false,!false=true;对非布尔值进行运算,会先将其转换为布尔值然后进行运算;任意数据类型可以通过取两次反来转换为布尔值，类似于Boolean。  
      (2) &&: 与，可以对运算符两侧的值进行与运算并返回结果;两个值中,只要有一个为false就返回false,只有两个值都为true时才返回true;JS中的与属于短路与,即如果第一个值为false则不会再看第二个值。  
      (3) ||: 或,对运算符两侧的值进行或运算并返回结果;两个值中只要有一个为true就返回true,只有两个值都为false时才返回false;JS中的或属于短路或,即如果第一个值为true则不会再看第二个值。  
      (4) 对于非布尔值进行与或运算：会先将其转换为布尔值,然后再运算,并返回原来的值。  
      与运算：如果第一个值为true则返回第二个值，如果第一个值为false则返回第一个值。  
      或运算；找true如果第一个值为true则直接返回第一个值，如果第一个值为false则直接返回第二个值。
    + 赋值运算符  
      (1) =: 可以将符号右侧得值赋值给符号左侧的变量  
      (2) +=: a += 5等价于a = a + 5  
      (3) -=: a -= 5等价于a = a - 5  
      (4) \*=: a \*= 5等价于a = a * 5  
      (5) /=: a -= 5等价于a = a / 5  
      (6) %=: a -= 5等价于a = a % 5
    + 关系运算符，通过关系运算符可以比较两个值之间的大小关系，如果关系成立返回true否则返回false。  
      (1) 与数学中的关系运算符类似：>: 大于号、>=: 大于等于、<: 小于号、<=: 小于等于  
      (2) 非数值的情况进行比较：非数值型与数值的变量进行比较，会先将其转变为数值型再进行比较；任何值和NaN做任何比较都是false；如果关系运算符两侧都是字符串时，则不会将其转换为数字进行比较，而是分别比较字符串中字符的[Unicode编码](https://baike.baidu.com/item/Unicode%E7%A0%81/7704811)，比较字符串时是一位一位两两进行比较,一样则比较下一位，比较两个字符串型的数字可能会得到不可预期的结果，可以选择将其中任意一个转为数值型。
    + Unicode编码在网页中的使用  
      (1) 在JS中，字符串变量中使用转义字符输入Unicode编码：\u四位编码  
      (2) 在HTML中，&#四位编码;
    + 相等运算符，用来比较两个值是否相等，如果相等返回true，否则返回false  
      (1) == 等于，做相等比较运算，当比较两个值时，如果两个值类型不同，那么会先将他们转换为相同类型再进行比较;Undefined衍生自null,所以两者做相等判断时,返回true;NaN不和任何值相等,包括它本身，判断一个变量值是否时NaN需要使用isNaN()函数来进行判断,变量作为参数传入，如果相等返回true，否则返回false。  
      (2) !=不等于：用来判断两个值不相等；使用!=来做不相等运算，不相等也会对变量进行自动类型转换，如果转换后相等它也会返回false。  
      (3) === 全等，用来判断两个值是否全等，与==类似，但是不会做类型转换，如果两个变量类型不同，直接返回false。  
      (4) !==不全等，用来判断两个值是否不全等，与!=类似，但是不会做类型转换，如果两个变量类型不同，直接返回false。
    + 条件运算符，也叫三元运算符、三目运算符：  
      (1) 语法：条件表达式 ? 语句1 : 语句2;  
      (2) 执行流程：条件运算符在执行时，首先对条件表达式进行求值，如果该值为true则执行语句1并返回执行结果，如果该值为false则执行语句2并返回执行结果。  
      (3) 如果条件表达式的值为非布尔值，那么会先将其传唤为布尔值在进行运算。
    + 逗号运算符：,使用逗号运算符可以分割多个语句,一般可以在声明多个变量时使用。
    + 运算符的优先级，和数学中的运算符优先级类似，如先乘除，后加减在JS中有一个运算发优先级的表，在表中位置月考上优先级越高，优先级越高越先计算，优先级一样则从左往右进行计算。

      | 运算符优先级(越靠上优先级越高) |
      | :-- |
      | .、[]、new |
      | () |
      | ++、-- |
      | !、~、+(单目)、-(单目)、typeof、void、delete |
      | %、*、/ |
      | +(双目)、-(双目) |
      | <<、>>、>>> |
      | <、<=、>、>= |
      | == 、!== 、=== |
      | & |
      | ^ |
      | &#124; |
      | && |
      | &#124;&#124; |
      | ?: |
      | =、+=、-=、*=、/=、%=、<<=、>>=、>>>=、&=、^=、&#124;= |
      | , |

10. [语句](https://www.w3school.com.cn/js/js_statements.asp)和代码块
    + 程序是由一条条语句构成的，语句时按照自上向下的顺序一条条执行的。
    + 在JS中可以使用{}花括号来为语句进行分组，同一个{}中的语句我们称之为一组语句，或者称之为代码块，她们要么都执行，要么都不执行，代码块后面就不用再写分号了。
    + JS中的代码块只具有分组的作用，没有其他的用途，即代码块中的内容，在外部是完全可见的。

11. 流程控制语句，JS中的程序是从上到下一行一行执行的，通过使用流程控制语句可以控制程序执行流程，可以使程序可以根据一定的条件来选择执行。
    + [条件判断](https://www.w3school.com.cn/js/js_if_else.asp)(选择)语句，使用条件判断语句可以在执行某条语句之前进行判断，如果条件成立才会执行语句，条件不成立则语句不执行。  
      (1) 语法一：

      ``` JavaScript
        if(条件表达式)
            语句
      ```  

      if语句在执行时会先对条件表达式进行求值判断，如果条件表达式的值为true,则执行if后的语句，如果条件表达式的值为false则不会执行if后的语句；if语句只能控制紧随其后的那一条语句，要想控制多条语句则需要将多条语句放到代码块，if语句后的代码块不是必须的，但是在开发中尽量写上。  
      (2) 语法二:

      ``` JavaScript
        if(条件表达式){
            语句...
        }else{
            语句...
        }
      ```

      if...else...语句，当该语句执行时，会先对if后的条件表达式进行求值判断，如果该值为true,则执行if后的语句,如果该值为false则执行else后的语句。  
      (3) 语法三：

      ``` JavaScript
        if(条件表达式){
            语句...
        }else if(条件表达式){
            语句...
        }else if(条件表达式){
            语句...
        }else{
            语句...
        }

      ```

      if...else if...else语句，当该语句执行时,会从上到下一次对条件表但是进行求值判断，如果职位true则执行当前语句，如果值为false,则继续向下判断，如果所有条件都不满足,则执行最后的一个else语句；该语句中，只会有一个代码块被执行，一旦代码块执行了，则直接结束语句。
    + [条件分支语句](https://www.w3school.com.cn/js/js_switch.asp)，switch语句  
      (1) 语法：

      ``` JavaScript
        switch(条件表达式){
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
            case 表达式:
                语句...
                break;
            ...
            default:
                语句...
                break;
        }
      ```  

      (2) 执行流程：在执行时会依次将case后的表达式的值和switch后的条件表达式的值进行全等比较，如果比较结果为true，则当前的case处开始执行代码(之后的所有代码，需要使用break;来退出switch语句)，如果比较结果为false则继续向下比较，如果所有的条件都不满足则会执行最后的default中的语句。  
      (3) switch语句与if语句功能上实际上有重复，使用switch实现的功能可以通过if来实现，同样使用if实现的功能也能通过switch来实现。
    + 循环语句:通过循环语句可以反复的执行一段代码多次  
      (1) [while循环](https://www.w3school.com.cn/js/js_loop_while.asp):  
      语法：

      ``` JavaScript
        while(条件表达式){
            语句...
        }
      ```  

      执行过程：先对条件表达式进行求值判断，如果值为true则执行循环体，循环体执行完毕后，继续对表达式进行判断，如果为true，则继续执行循环体，依次类推，知道值为false则终止循环  
      (2) do...while循环
      语法:

      ```JavaScript
        do{
            语句...
        }while(条件表达式)
      ```

      执行过程：先执行循环体，循环体执行完毕之后，才对while后的条件表达式进行判断，如果结果为true，则会继续执行循环体，执行完毕继续判断依次类推，如果结果为false，则终止循环。  
      实际上这两个语句功能类似，不同的十while实现判断后执行，do...while是先执行后判断。所以do...while可以保证循环体至少执行一次。  
      (3) [for循环](https://www.w3school.com.cn/js/js_loop_for.asp)，for语句也是一个循环语句，也称为for循环。在for循环中为我们提供了专门的位置用来方三个表达式：初始化表达式，条件表达式，更新表达式。  
      语法：

      ``` JavaScript
        for(初始化表达式; 条件表达式; 更新表达式){
            语句...
        }
      ```

      执行流程：先执行初始化表达式，初始化变量；执行条件表达式，判断是否执行循环，如果为true则执行循环，如果为false则终止循环；循环体执行完后执行更新表达式；重复判断条件表达式和执行循环。初始化表达式只在开始执行了一次。  
      for循环可以嵌套，即一个for循环里还可以嵌套一个for循环，从而能够灵活的进行流程控制。
    (4) [break和continue](https://www.w3school.com.cn/js/js_break.asp)：break关键字可以用来退出switch或循环语句，不能单独在if语句中中使用break和continue关键字。break默认只能终止当前循环，可以为循环语句创建一个label，来表示当前的循环，label：循环语句，使用break语句是，可以在break后跟一个label，这样break将会结束指定的循环，而不是当前循环。continue关键字可以用来跳过当次循环。

12. [对象](https://www.w3school.com.cn/js/js_objects.asp)
    + JS中的数据类型：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义(以上者五种类型属于基本数据类型，以后只要看到的之不是上面5种，则全都是对象类型)、Object 对象。如果使用基本数据类型的数据，我们所创建的变量都是独立的，不能成为一个整体，这就引出了对象的需求；对象属于一种复合的数据类型，在对象中可以保存多个不同的数据类型的属性。
    + 对象的分类:  
      (1) 内建对象：由ES标准中定义的对象,在任何的ES的实现中都可以使用，比如Math String Number Boolean Function Object...  
      (2) 宿主对象：由JS的运行环境提供的对象,目前来讲主要值由浏览器提供的对象,比如DOM、BOM。  
      (3) 自定义对象，由开发人员自己创建的对象。
    + 对象的基本操作：  
      (1) 创建一个对象，使用new关键字调用的函数，是构造函数constructor，构造函数是专门用来创建对象的函数。使用typeof返回变量类型会返还object。  
      (2) 在对象中保存的值成为属性,向对象添加属性，语法：对象.属性名 = 属性值;  
      (3) 读取对象中的属性，语法：对象.属性名;如果读取对象中没有的属性,不会报错,而是返回undefined。  
      (4) 修改对象的属性值，语法：对象.属性名 = 新属性值;  
      (5) 删除对象的属性，语法：delete 对象.属性名;
    + 属性名与属性值：  
      (1) 属性名：对象的属性名不强制要求遵守标识符的规范，但是使用的时候尽量还是遵循标志符的规范。如果要使用特殊的属性名不能采用'.'的方式来操作，需要使用另一种方式,语法:对象["属性名"] = 属性值;读取的时候也需要采用这种方式。使用[]这种i形式去操作属性，更加的灵活，在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性名对应的属性值。  
      (2) 属性值：JS对象的属性值，可以是任意的数据类型，甚至也可以是一个对象。  
      (3) in运算符：通过in运算符可以检查一个对象中是否含有指定的属性，如果有则返回true，没有则返回false。
    + 基本数据类型和引用数据类型：  
      (1) JS中的变量都是保存到栈内存中的，基本数据类型的值直接在栈内存中进行存储，值与值之间都是独立存在，修改一个变量不会影响其他的变量。引用数据类型(对象)是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是对象的内存地址(对象的引用)。如果两个变量保存的是同一个对象的引用，那么当一个变量修改属性时，另一个也会受到影响。  
      (2) 修改对象变量的值不会对对象产生影响，实际上是将地址换为了其他值。  
      (3) 当比较两个基本数据类型的值的时候就是比较的这两个值；而比较两个引用数据类型时，它是比较的对象的内存地址，两个对象即使一摸一样但是也不一定相等，因为实际上是比较两个地址，地址不同则不相等。
    + 对象字面量  
    使用对象字面量，可以在创建对象时，直接指定对象的属性。语法：{属性名: 属性值, 属性名: 属性值...};  
    对象字面量的属性名可以加引号，也可以不加，建议不加，如果要使用一些特殊的名字，则必须加引号；属性名和属性值是一组一组的键值对(key-value)结构，最后一对的时候就不用写','了。

13. [函数](https://www.w3school.com.cn/js/js_functions.asp)
    + 函数也是一个对象，函数中可以封装一些功能(代码)，在需要是可以执行这些功能(代码)。函数可以保存一些代码，在需要的时候调用。，使用typeof检查一个函数的类型时，会返回function。封装到函数中的代码不会立即执行，函数中的代码会在函数调用的时候执行,调用函数语法:函数对象();当调用函数时，函数中封装的代码会按顺序执行。
    + 函数的创建  
      (1) 调用构造函数创建一个函数
      语法：

      ``` JavaScript
        var 函数名 = new Function("函数中执行的代码");
      ```

      然而使用构造函数创建一个函数对象很不方便，所以实际中很少使用此方法。  
      (2) 使用函数声明来创建一个函数
      语法:

      ``` JavaScript
        function 函数名(形参1, 形参2, ...){
            语句...
        }
      ```

      (3) 使用函数表达式来创建一个函数  
      语法：

      ``` JavaScript
        var 函数名 = function(形参1, 形参2, ...){
                        语句...
                    };
      ```

    + 函数的参数  
      (1) 可以在函数的()中指定一个或多个形参(形式参数)，多个形参之间使用','隔开，声明形参就相当于在函数内部声明对应的变量，但并不赋值，调用函数时，可以在()中指定实参(实际参数)，实参会赋值给函数中对应的形参。  
      (2) 调用函数时解析器不会检查实参的类型，所以在调用函数的时候要注意是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查。调用函数时，解析器也不会检查实参的数量，多余的实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined。函数的实参可以是任意数据类型。
    + 函数的返回值  
      (1) 可以使用return关键字设置函数的返回值，语法：return 值;return后的值将会作为函数的执行结果返回。  
      (2) 在函数中return之后的语句都不会执行了，如果return之后不跟任何值就相当于返回一个undefined，如果函数中不屑return，也会返回undefined；return可以返回任意类型的值。
    + 函数的参数可以是任意值：函数的对象可以是任何值，如String、Number等基本数据类型；当需要传递的参数过多时可以考虑使用Object类型，传递一个对象类型；甚至可以传递一个函数，当传递函数时，如果传递函数时使用“函数名()”的话，相当于调用函数，会使用函数的返回值，若使用“函数名”传递的是函数对象，相当于直接使用函数对象。
    + 函数返回值的类型：  
      (1) break，continue，return区别：使用break可以退出当前的循环，使用continue可以跳过当此循环，使用return可以结束整个函数。
      (2) 返回值可以是任意的数据类型，也可以是一个对象，也可以是一个函数。
    + 立即执行函数：函数定义完之后立即调用，只执行一次。用一个括号来包裹一个匿名函数，说明这是一个整体的函数对象，然后在这个函数对象之后再加一对括号来调用函数，同样也可以在调用的时候传递参数。
    + 方法：函数也可以成为对象的属性，如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法(method)，调用这个函数就称为调用对象的方法，只是说法上不同，本质一样。
    + 枚举对象中的属性，在不清楚一个未知对象中的属性多少的情况下，可以使用for...in语句进行枚举，  
      语法:

      ``` JavaScript
        for(var 变量 in 对象){

        }
      ```

      for...in语句遍历对象时，对象总共有几个属性，就循环执行几次，每次执行时，会将对象中的一个属性的名字赋值给变量。
    + 在函数对象中有两个方法[call()](https://www.w3school.com.cn/js/js_function_call.asp)与[apply()](https://www.w3school.com.cn/js/js_function_apply.asp)，需要通过函数来调用；当函数调用call()和apply()方法时，都会调用函数执行；call()方法可以将实参在函数对象之后依次传递，apply方法需要将实参封装到一个数组中统一传递。
    + 到目前为止this的指向情况，基本就这些：以函数的形式调用时，this永远指向window；以方法的形式调用时，this指向调用方法的对象；以构造函数形式调用用，this指向新创建的对象；使用call()和apply()调用时，this是指定的那个对象。
    + 函数的参数列表(arguments)：在调用函数时，浏览器每次都会传递进两个隐含的参数，一个是函数的下文对象this，另一个是封装实参的对象arguments；arguments是一个类数组对象，虽不是一般的数组，但是可以像数组一样获取长度，arguments的长度就是实参的个数；在调用函数时，我们所传递的实参都会在arguments中保存，所以即使不定义形参也能通过arguments来使用实参，只不过比较麻烦，arguments[0]第一个实参arguments[1]第二个实参。arguments里面有一个属性叫callee，这个属性对应一个函数对象，就是当前正在执行的函数对象。

14. [作用域](https://www.w3school.com.cn/js/js_scope.asp)(scope)
    + 作用域指一个变量的作用范围，在JS中一共有两种：全局作用域和函数作用域(局部作用域)。
    + 全局作用域：  
      (1) 直接写在script标间中的JS代码，都是全局作用域；  
      (2) 全局作用域在页面打开时创建，页面关闭时销毁；  
      (3) 在全局作用域中有一个全局对象window，我们可以直接使用，它代表浏览器的窗口，它由浏览器创建；在全局作用域中创建的变量都会作为window的属性，在全局作用域中创建的函数都会作为window的方法。  
      (4) 全局作用域中的变量都是全局变量，在页面的任意位置都可以访问的到。
    + 变量与函数的声明提前：
      (1) 变量的声明提前，使用var关键字生命的变量，会在所有的代码执行之前被声明(但是要执行到当前行才会赋值)；但是如果声明变量时不使用var关键字，则变量不会被声明提前。  
      (2) 函数的声明提前，使用函数声名形式创建的函数，它会在所有代码执行之前就被创建，所以可以在函数声明之前调用函数；使用函数表达式创建的函数，不会被声明提前，所以不能再函数赋值之前调用。
    + 函数作用据(局部作用域)：  
      (1) 调用函数时创建函数作用域，函数执行完毕之后，函数作用域销毁；每调用一次函数就会创建一个新的函数作用域，它们之间相互独立；  
      (2) 在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域中的变量；当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用如果没有则向上一级作用域中寻找，直到找到全局作用域，如果依然没有找到，则会保存ReferenceError；在函数作用域中要访问全局作用域中的变量，可以使用window对象；  
      (3) 在函数作用域中也有声明提前的特征，使用var关键字声明的变量，会在函数中所有的代码执行之前被声明，函数声明也会在所有的代码执行之前执行；  
      (4) 定义形参就相当于在函数作用域中声明了变量

15. [this指针](https://www.w3school.com.cn/js/js_this.asp)
    + 解析器在调用函数时，每次都会向函数内部传递一个隐含的参数，这个隐含参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象；
    + 根据函数调用的方式不同，this会指向不同的对象：以函数的形式调用时this永远都是window，以方法的形式调用时this就是调用该方法的那个对象；本质上是一样的，因为window本质也是一个对象，调用函数实际上就是调用window对象的方法。

16. 对象进阶
    + 使用工厂方法创建对象：对于拥有相同属性的不同对象，可以考虑抽离出一个函数来创建对象并在函数中为对象添加属性和方法并最终返回该对象，使用工厂方法可以快速批量创建对象。
    + 使用[构造函数](https://www.w3school.com.cn/js/js_object_constructors.asp)(类)创建对象：  
      (1) 使用构造函数创建对象，构造函数就是一个普通函数，创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写。构造函数和普通函数的区别就是调用方式的不同，普通函数是直接调用，而构造函数需要使用new关键字调用。  
      (2) 构造函数执行流程：一开始立刻创建一个新的对象，将新建的对象设置为函数中的this在构造函数中可以使用this来逐行创建对象，逐行执行函数中的代码(用户只需要操作该部分)，将新建的对象作为返回值返回。  
      (3) 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数成为一个类，我们将通过一个构造函数创建的对象称为时该构造对象的实例或者该类的实例。  
      (4) 使用instanceof关键字可以检查一个对象是否是一个类的实例，是则返回true，否则返回false；所有的对象都是Object的后代，所以任何对象和Object做instanceof检查时都会返回true。  
      (5) this补充：当以函数的形式调用时，this指向window；当以方法形式调用时，this指向调用该方法的对象；当以构造函数形式调用时，this就是新创建的那个对象。  
      (6) 使用构造函数(类)创建的对象可以避免了使用Object创建对象带来的不可识别对象类的问题。  
      (7) 目前我们的方法是在构造函数内创建的，也就是构造函数每执行一次就会创建一个新的方法，也就是所有的实例的该方法都是唯一的，这样就导致构造函数每执行一次就会创建一个新方法，然而这样完全没有必要(占用内存等缺陷)，完全可以使所有的对象共享同一个方法。解决方法可以将函数定义到外部全局作用域，但是这样有带来了新的问题：将函数定义在全局作用域中，污染了全局作用域的命名空间，而且定义在全局作用域中也很不安全。
    + [原型](https://www.w3school.com.cn/js/js_object_prototypes.asp)(prototype)对象  
      (1) 我们所创建的每一个函数，解析器都会想函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象。  
      (2) 如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数调用时他所创建的对象中都会有一个隐含的属性，指向构造函数的原型对象，我们可以通过“__proto__”来访问该属性。  
      (3) 当访问对象的一个属性或方法的时候现在对象自身中寻找，如果有则直接使用，如果没有则去原型对象中寻找，如果找到则直接使用。  
      (4) 以后创建构造函数时，可以将这些对象共有的属性和方法，同意添加到构造函数的原型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。  
      (5) 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true；可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，使用该方法只有当对象自身中含有属性时，才会返回true。  
      (6) 原型链：原型对象也是对象，所以它也有原型，当我们使用一个对象的属性或方法时，会先在自身中寻找，自身中如果有则直接使用，如果没有则取原型中找如果有则直接使用，如果没有则去原型的中寻找，指导找到Object对象的原型，Object原型对象没有原型，如果在Object中依然没有找到，则返回undefined。  
    + 对象的toString()：当我们直接在页面中打印一个对象时，实际上时输出的对象的toString()方法的返回值;如果我们希望在输出对象时不输出[object Object]，则可以为对象添加一个toString()方法，如果需要在同一类的不同对象多次输出对象，需要修改对象原型的toString，进而对象原型的所有实例的都使用这个toString()。
    + 垃圾回收(garbage collection)  
      (1) 就像人们生活一样，程序运行过程中也会产生垃圾，这些垃圾积攒过多以后会导致程序运行速度过慢，所以我们需要一个垃圾回收机制，来处理程序运行过程中产生的垃圾。  
      (2) 当一个对象没有任何的变量或属性对他进行引用，此时我们将用于无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量内存空间，会导致程序运行变慢，所以这种垃圾必须进行清理。  
      (3) 在JS种拥有自动的垃圾回收机制，会自动将这些垃圾从内存中销毁，我们不需要也不能进行垃圾回收的操作，我们只需要将不再使用的对象设置为null即可。

17. [数组](https://www.w3school.com.cn/js/js_arrays.asp)(Array)
    + 数据时ES标准的一个内建对象，数组也是一个对象，使用typeof检查一个数组时，会返回Object，它和普通的对象功能类似，也是用来存储一些值的，不同的是普通对象是使用字符串作为属性名的，而数组是使用数字来作为索引(Index)操作元素的。
    + 索引：从0开始的整数就是索引
    + 数组的存储性能比普通对象更好，在开发中我们经常使用数组来存储一些数据。
    + 数组的基本操作：  
      (1) 使用构造函数创建数组，语法：var 数组名 = new Array();
      (2) 向数组中添加元素，语法：数组名[索引] = 值；
      (3) 读取数组中的元素，语法：数组名[索引]；如果读取不存在的索引，不会报错而是返回undefined；
      (4) 数据的长度属性length：获取数组的长度，使用length属性获取数组的长度(元素的个数)，语法：数组名.length;对于连续的数组，使用length属性可以获取到数组的长度(元素的个数)，对于非连续的数组，使用length属性会获取到最大的索引+1，尽量不要创建非连续的数组。同样还可以通过length属性来修改数组的长度，如果修改的length大于原长度，则多出的部分会空出来，如果修改的length小于原长度，则多出的元素会被删除。巧用length属性，向数组的最后一个位置添加元素：数组名[数组名.length] = 值;
      (5) 使用字面量创建数组：语法：var 数组名 = [];使用字面量创建数组时，可以同时指定数组中的元素，元素之间使用英文逗号隔开，其实使用构造函数创建数组时也可以指定数组中的元素，只要在创建时在Array()括号中给定元素即可；当然两者也有一点区别：当只给定一个元素时使用字面量时创建的只有一个元素的数组，而构造函数方式是创建一个长度为给定长度的数组。  
      (6) 数组中的元素可以是任意的数据类型，甚至是对象、函数和数组。
    + 数组的常用方法：  
      (1) push()：该方法可以像数组的末尾添加一个或多个元素，并返回数组的新长度，可以将要添加的元素作为方法的参数传递，这样这些元素将会自动添加到数组的末尾。  
      (2) pop()：该方法可以删除数组的最后一个元素，并将被删除的元素作为返回值返回。  
      (3) unshift()：该方法向数组的开头添加一个或多个元素，并返回新的数组长度，向前面插入元素之后，其他的元素索引会依次调整。  
      (4) shift()该方法从数组的开头删除一个元素，并返回该元素。  
      (5) forEach()：该方法用于遍历数组，这个方法需要IE8以上浏览器才支持，其他浏览器基本都支持。这个方法需要一个函数作为参数，像这种函数，由我们创建但是不由我们调用的，我们称为回调函数；数组中有几个元素函数就会执行几次，每次执行的时候浏览器会将遍历到的元素以实参的形式传递过来，我们可以定义形参，来读取这些内容; 浏览器会在回调函数中传递三个参数：第一个参数就是当前遍历到的元素，第二个参数就是当前遍历到的元素的索引，第三个参数就是正在遍历的数组。  
      (6) slice()：这个函数可以从数组中提取指定元素，该方法不会改变原数组而是吧截取到的元素封装到一个新数组中并返回；参数:第一个参数为截取开始的位置索引(包含)，第二个参数为截取结束的位置索引(不包含)；第二个参数可以不写，此时会截取从开始位置往后的所有元素；索引可以传递一个负值，如果传递一个负值，则从后往前计算，如-1为倒数第一个，-2为倒数第二个。  
      (7) splice()：这个方法可以用于删除数组中的指定元素，使用splice会影响到原数组，会将指定元素从原数组中删除，并将删除的元素作为返回值返回；参数：第一个参数为开始位置的索引，第二个参数为删除元素的数量，第三个及以后的参数为要插入的新元素，插入到开始索引的前面。  
      (8) concat()：该方法可以链接两个或多个数组，并将新的数组返回；该方法不会对原数组产生影响。  
      (9) join()：该方法可以将数组转换为一个字符串，并将转换的字符串返回；在join()方法中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符，默认为逗号；该方法不会对原数组产生影响。  
      (10) reverse()：该方法用来反转数组；该方法会直接修改原数组。  
      (11) sort()：该方法会对数组中的元素进行排序，默认会按照Unicode编码进行排序，即使是对数字进行排序也是使用Unicode编码进行排序,所以可能会得到错误的数组排序；我们可以在sort()方法中添加一个回调函数，来指定排序规则，回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素来作比较，实参去调用回调函数，使用哪个元素不确定，但是肯定是在数组中第一个参数(a)一定在第二个参数(b)前面；浏览器会根据回调函数的返回值来决定元素的顺序，如果返回一个大于0的值则元素会将换位置，如果返回一个小于0的值则元素位置不变，如果返回一个0则认为两个元素相等，也不交换位置；如果需要升序则返回(a - b),如故宫需要降序则返回(b - a)；该方法也会直接修改原数组。  
      (12) 除了使用instanceof关键字来检查一个对象是否是数组外，还可以使用Array.isArray(对象名);来判断。

18. [日期](https://www.w3school.com.cn/js/js_dates.asp)(Date)
    + 在JS中使用Date对象来表示一个时间，如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间，创建指定的时间对象,需要在构造函数中传递一个表示时间的字符串作为参数，字符串日期的格式:"月份/日/年 时:分:秒"。
    + 常用方法：  
      (1) getDate()：获取当前日期对象是几日；  
      (2) getDay()：获取当前日期对象是周几，会返回一个0-6的值，表示周日；  
      (3) getMonth()获取当前日期对象是几月，会返回一个0-11的值，0表示一月；  
      (4) getFullYear()：获取当前日期对象的年份；  
      (5) getTime()：获取当前日期都西昂的时间戳，时间戳指的是从格林威治标准时间1970年1月1日0时0分0秒到当前日期所花费的毫秒数，计算机底层在保存时间时都是使用的时间戳。  
      (6) Date.now()：获取当前的时间戳，代码执行到此处时的时间戳，可以使用它来测试代码性能。

19. Math
    + Math和其他对象不同，他不是一个构造函数，它属于一个工具类，不用创建对象，它里面封装了数学运算相关的属性和方法，属性与方法的使用一般都是以“Math.”开头的形式使用，比如Math.PI表示圆周率。
    + 常用方法：  
    (1) abs()：可以用来计算一个数的绝对值；  
    (2) ceil()：对数值进行上舍，即向上取整，小数位只要有值就自动进1；  
    (3) floor()：对数值进行下舍，即向下取整，小数位会被舍掉；  
    (4) round()：对数值进行四舍五入；  
    (5) random()：可以生成一个0-1之间的随机数；  
    (6) max()：可以获取多个数中的最大值；  
    (7) min()：可以获取多个数中的最小值；  
    (8) pow(x, y)：返回x的y次幂；  
    (9) sqrt(x)：返回x的开方后的值。

20. 包装类
    + JS中数据类型：基本数据类型：String、Number、Boolean、Null、Undefined；引用数据类型：Object。
    + 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象  
      (1)String()：将一个基本数据类型字符串转换为String对象；  
      (2) Number()：将一个基本数据类型数值转换为Number对象；  
      (3) Boolean()：将一个基本数据类型布尔值转换为Boolean对象。  
      (4) 注意：实际应用中基本不会使用基本数据类型的对象，如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果。
    + 方法和属性只能添加给对象，不能添加给基本数据类型，当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法，调用完之后在将其转换为基本数据类型。
    + 实际应用中用到最多的是字符串的方法，即字符串对象的方法：  
      (1) charAt()：可以返回字符串中指定位置的字符，根据索引获取指定的字符。  
      (2) charCodeAt()：获取指定位置的字符的编码Unicode编码。  
      (3) fromCharCode()：可以根据字符编码去获取字符。  
      (4) concat()：可以用来链接两个或多个字符串。  
      (5) indexOf()：可以检索一个字符串中是否含有指定内容，如果字符串中含有改内容，则会返回其第一次出现的索引，如果没有找到指定的内容，则返回-1；可以指定第二个参数，指定开始查找的位置。  
      (6) lastIndexOf()：该方法用法跟indexOf()类似，不同的是indexOf()从前往后找，lastIndexOf()从后往前找。  
      (7) slice()：可以从字符串中截取指定的内容，不会影响原数组，而是将截取的内容返回；第一个参数为开始位置索引(包括开始位置)，第二个参数为结束位置的索引(不包含结束位置位置)，如果省略第二个参数则会截取到后面所有字符，也就可以传递一个负数作为参数，附属的化将会从后边开始。  
      (8) substring()：可以用来截取一个字符串，与slice()类似；第一个参数为开始位置索引(包括开始位置)，第二个参数结束位置的索引(不包含结束位置)；如果传递了一个负值，则默认使用0，而且他还会自动调整，如果第二个参数小于第一个参数，则会自动变换参数位置。  
      (9) substr()：用来截取字符串，第一个参数为开始位置索引，第二个参数为截取字符的个数。  
      (10) split()：根据参数给定的字符将一个字符串拆分为数组，如果传递一个空串作为参数则将每个字符差分为单独的数组元素。  
      (11) toLowerCase()：将字符串转换为小写，并返回新字符串。  
      (12) toUpperCase()：将字符串转换为大写，并返回新字符串。

21. [正则表达式](https://www.w3school.com.cn/js/js_regexp.asp)
    + 用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来。
    + 创建一个正则对象的语法：

      ``` JavaScript
        var 变量名 = new RegExp("正则表达式", "匹配模式");
      ```

      如var reg = new RegExp("a");可以用来检查一个字符串中是否汉字字母"a"；在构造函数中可以传递一个匹配模式作为第二个参数，可以是："i"表示忽略大小写，"g"表示全局匹配模式；使用 typeof检查一个正则对象，返回object。
    + 正则表达式的方法：test()：使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，如果符合则返回true，否则返回false。
    + 正则语法：  
      (1) 使用字面量创建正则表达式语法：

      ``` JavaScript
        var 变量名 = /正则表达式/匹配模式;
      ```

      使用字面量的方式创建更加简单，使用构造函数创建更加灵活。  
      (2) 使用"|"表示“或”的意思，使用"[]"里面的内容也是“或”的关系，[ab] == a | b，[a-z]：任意的小写字母，[A-Z]：任意的大写字母，[A-z]：任意的字母，[0-9]：任意数字；[^ ab]：检查一个字符串除了ab是否含有其他内容。匹配任意字母的时候注意[A-z]实际上是匹配ASCⅡ码A-z的所有字符，实际上包含几个字符，所以严格来说应该使用[A-Za-z]来匹配任意字母。
    + 字符串和正则相关的方法：  
      (1) split()：可以将一个字符串拆分为一个数组，除了传递字符或字符串还可以传递以恶正则表达式作为参数，这样方法会根据正则表达式去拆分字符串，这个方法即使不指定全局匹配也会进行全局匹配。  
      (2) search()：搜索字符串中是否含有指定内容，如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1；可以接收一个正则表达式作为参数，然后根据正则表达式去检索字符串，即使使用正则全局匹配有智慧返回第一次满足条件的索引。  
      (3) match()：可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，默认只会返回第一个符合条件的内容，可以设置正则为全局匹配模式，这样就会匹配到所有内容；可以为一个正则表达式设置多个匹配模式，且顺序无所谓；match()会将匹配人的内容封装到一个数组中返回，即使只查询到一个结果。  
      (4) replace()：将字符串中指定内容替换为新的内容，第一个参数为被替换的内容，可以接收一个正则表达式作为参数，第二个参数为替换的新内容。默认只替换第一个符合条件的内容。
    + 正则表达式语法  
      (1) 量词：  
      通过量词可以设置一个内容出现的次数，量词只对它前边的一个内容起作用，若要对一组起作用可使用()括起一组元素。  
      | 量词 | 描述 |
      | :--: | :--: |
      | {n} | 正好出现n次 |
      | {m,n} | 出现m-n次 |
      | {m, } | 出现m次以上 |
      | + | 至少一个，相当于{1,} |
      | * | 0个或0个以上，相当于{0,} |
      | ? | 0个或1个，相当于{0,1} |
      | ^n | 匹配以n开头的字符串 |
      | n$ | 匹配以n结尾的字符串 |
      | ?=n | 匹配任何其后紧接指定字符串n的字符串 |
      | ?!n | 匹配任何其后没有紧接指定字符串n的字符串 |
      (2) 元字符：  
      在正则表达式中如果要匹配某些有其他用处的字符(如/、.等)需要使用“\”来进行转义，“\.”表示“.”，“\\”表示“\”；注意使用构造函数时，由于它的参数是字符串，而\是字符串中的转义字符，所以需要使用\时则需要\\来代替。
      | 元字符 | 描述 |
      | :--: | :--: |
      | . 表示任意字符
      | \w | 匹配任意字母、数字和下划线_，相当于[A-za-z0-9_] |
      | \W | 匹配除了字母、数字和下划线_，相当于[^A-za-z0-9_] |
      | \d | 匹配任意数字，相当于[0-9] |
      | \D | 匹配除了数字，相当于[^0-9] |
      | \s | 匹配空格 |
      | \S | 匹配非空格 |
      | \b | 匹配单词边界 |
      | \B | 匹配除了单词边界 |
      | \0 | 查找 NUL 字符 |
      | \n | 查找换行符 |
      | \f | 查找换页符 |
      | \r | 查找回车符 |
      | \t | 查找制表符 |
      | \v | 查找垂直制表符 |
      | \xxx | 查找以八进制数 xxx 规定的字符 |
      | \xdd | 查找以十六进制数 dd 规定的字符 |
      | \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符 |

22. [DOM](https://www.w3school.com.cn/js/js_htmldom.asp)(Document Object Model)文档对象模型
    + JS中通过DOM来对HTML文档进行操作，只要理解了DOM就可以随内心所余的操作Web页面。  
      (1) 文档：文档表示的就是整个HTML网页文档。  
      (2) 对象：对象表示将网页中的每一个部分转换为了一个对象。  
      (3) 模型：使用模型来表示对象之间的关系，这样方便我们获取对象。
    + 节点：  
      (1) 节点Node，是构成我们网页的最进本的组成部分网页中的每一个部分都可以称为是一个节点，比如html标签、属性、文本、注释、整个文档等都是一个节点。虽然都是节点，但是实际上他们的具体类型是不同的。比如：标签我们称为元素节点、属性我们称为属性节点、文本我们称为文本节点、文档我们称为文档节点。节点的类型不同，属性和方法也都不尽相同。  
      (2) 常用节点分为四类：文档节点；整个HTML文档，元素节点：HTML文档中的HTML标签，属性节点：元素的属性，文本节点：HTML标签中的文本内容。  
      (3) 节点的属性
      | 节点类型 | nodeName | nodeType | nodeValue |
      | :--: | :--: | :--: | :--: |
      | 文档节点 | #document | 9 | null |
      | 元素节点 | 标签名 | 1 | null |
      | 属性节点 | 属性名 | 2 | 属性值 |
      | 文本节点 | #text | 3 | 文本内容 |
    + 事件：  
      (1) 事件就是用户与浏览器之间的交互行为，比如：点击按钮、鼠标移动、关闭窗口。  
      (2) 我们可以在事件对应的属性中设置一些js代码，这样当事件被触发时，这些代码将会执行；但是直接将js代码写道html标签中就造成了结构合行为的耦合，不方便维护，所以不推荐使用这种方式。  
      (3) 我们通常使用的方式是对DOM元素对应事件绑定处理函数的形式来响应事件，当事件触发时，其对应的函数将会被调用，需要先获取要处理事件响应的DOM对象。  
      语法：

      ``` JavaScript
        DOM元素对象.事件名称 = function(){
          事件响应所执行的代码
        }
      ```

      (3) [DOM元素事件对象](https://www.w3school.com.cn/jsref/dom_obj_event.asp)
    + 文档的加载  
      (1) 浏览器在加载一个页面时，是从上往下开始加载的，读取到一行就运行一行，如果将script标签写到页面的上边，在代码执行时，页面还没有加载，DOM对象也没有加载，则获取不到DOM元素。所以将js代码编写到页面的下部，就是在页面加载完毕以后再执行js代码。  
      (2) 如果非要将JS代码写道页面上部，则需要注意若要获取DOM元素，需要再页面加载完毕之后再获取。  
      (3) onload事件会在整个页面加载完毕之后执行，支持该事件的对象有image、layer、window。该事件对应的响应函数将会在页面加载完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了。所以我们如将js代码写到页面的上部，又要操作DOM元素则需要将代码编写到window对象的onload响应函数中。
    + DOM元素查询  
      (1) 获取元素节点，通过document对象调用以下方法：
      | 方法名 |  说明 |
      | :--: | :--: |
      | getElementById() | 通过id属性获取一个元素节点对象 |
      | getElementsByTagName() | 通过标签名获取一组元素节点对象 |
      | getElementsByName() | 通过name属性获取一组元素节点对象 |  
      (2) 获取元素节点子节点(后代节点)，通过具体的元素节点调用以下方法或属性：
      | 方法或属性名 |  说明 |
      | :--: | :--: |
      | getElementsByTagName() | 方法，返回当前节点的指定标签名后代节点 |
      | childNodes | 属性，表示当前节点的所有子节点 |
      | children | 属性可以获取当前元素的所有子元素，IE8以下不兼容 |
      | firstChild | 属性，表示当前节点的第一个子节点 |
      | firstElementChild | 属性,获取当前元素的第一个子元素，不兼容IE8以下 |
      | lastChild | 属性，表示当前节点的最后一个子节点 |  
      (3) 获取父节点或兄弟节点，通过具体的节点调用以下属性：
      | 属性名 |  说明 |
      | :--: | :--: |
      | parentNode | 表示当前节点的父节点 |
      | previousSibling | 表示当前节点的前一个兄弟节点 |
      | nextSibling | 表示当前系欸但的后一个兄弟节点 |
      (4) 其他的几个DOM查询的属性和方法，通过document对象调用以下方法：
      | 方法或属性名 |  说明 |
      | :--: | :--: |
      | body | 属性，用来保存的是body的引用，类似与document.getElementByTagName("body") |
      | documentElement | 属性，保存的是html根标签，类似与document.getElementByTagName("html") |
      | all | 属性，保存页面中所有所有元素，类似与document.getElementByTagName("*") |
      | getElementsByClassName()| 方法，可以根据class属性值获取一组元素节点对象，不兼容IE8以下 |
      | querySelector() | 方法需要一个选择器的字符串作为参数,可以根据一个CSS选择器来查询一个元素的节点对象，虽然IE8中没有getElementsByClassName()但是可以使用querySelect()方法，使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么只会返回第一个 |
      | querySelectAll() | 该方法和querySelect()类似，不同的是它会将符合条件的元素封装到一个数组返回，即使只有一个元素也会以数组的形式返回 |
    + DOM元素增删改
      | 方法名 | 说明 |
      | :--: | :--: |
      | appendChild() | 把新的子节点添加到指定节点，父节点.appendChild(子节点); |
      | removeChild() | 删除子节点，父节点.removeChild(子节点); |
      | replaceChild() | 替换子节点，父节点.replaceChild(新节点, 旧节点); |
      | insertBefore() | 在指定的子节点前面插入新的子节点，父节点.insertBefore(新节点, 旧节点); |
      | createElement() | 创建元素节点，需要一个标签名作为参数，将会根据标签名创建元素节点对象，并将创建好的对象作为返回值返回，document.createElement("li"); |
      | createTextNode() | 创建文本节点，需要文本内容作为参数，将会根据内容创建文本节点，并将新的节点返回，document.createElement("你好！"); |

23. style样式获取与修改等
    + [使用DOM操作内联样式](https://www.w3school.com.cn/js/js_htmldom_css.asp)：  
      (1) 通过JS修改元素的样式，语法：元素.style.样式名 = 样式值;注意如果CSS的样式命中含有“-”，这种名字再JS中是不合法的，如“background-color”，需要将其修改为驼峰命名法，即去掉“-”后面的单词首字母大写，[JS方式操作style属性名参考](https://www.w3school.com.cn/jsref/dom_obj_style.asp)。  
      (2) 通过style属性设置的样式都是内联样式，内联样式有较高优先级，所以通过修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，及时通过JS也不能覆盖改样式，此时将会导致JS修改的样式失效，所以尽量不要喂养是添加!important。  
      (3) 读取元素样式，语法：元素.style.样式名；通过style属性读取和设置的属性都是内联属性，无法读取样式表中的属性。
    + 通过currentStyle属性它可以用来读取当前元素正在显示(优先级高的样式优先显示)的样式，语法：元素.currentStyle.样式名;如果元素没有设置改样式，则获取它的默认样式。注意该属性只能在IE浏览器中使用并生效。
    + getComputedStyle()方法可以获取元素当前的样式，这个方法是window对象的方法，可以直接使用。需要两个参数：第一个，需要获取的样式的元素；第二个，可以传递一个为元素(before、after)，一般都传null。该方法返回一个对象，对象中封装了当前元素对应的样式。读取样式规则与currentStyle类似，可以通过“对象.样式名”来获取样式值，如果获取的样式没有设置，则会获取到真实的值，而不是默认值，比如没有设置width它不会获取到auto，而是实际长度。但是该方法不支持IE8及以下的浏览器。
    + 通过currentStyle属性和getComputedStyle()方法获取到的style属性值都是只读的，即不能通过此方式设置style属性值。
    + 其他样式相关的属性，这些属性获取的数据值都是不带px的，返回都是一个数字，可以直接进行计算；这些属性都是只读的，不能修改。
      | 属性名 | 说明 |
      | :--: | :--: |
      | clientWidth | 获取元素的可见宽度，包括内容区和内边距 |
      | clientHeight | 获取元素的可见高度，包括内容区和内边距 |
      | offsetWidth | 获取元素的整个宽度，包括内容区、内边距和边框 |
      | offsetHeight | 获取元素的整个高度，包括内容区、内边距和边框 |
      | offsetParent | 获取当前元素的定位父元素，会获取到离当前元素最近的开启了定位的祖先元素，如果所有的祖先元素都没有开启定位则返回body |
      | offsetLeft | 获取当前元素相对于其定位元素的水平偏移量 |
      | offsetTop | 获取当前元素相对于其定位元素的垂直偏移量 |
      | scrollWidth | 获取元素整个水平滚动区域的宽度|
      | scrollHeight | 获取元素整个垂直滚动区域的高度 |
      | scrollLeft | 获取水平滚动条滚动的距离 |
      | scrollTop | 获取垂直滚动条的垂直滚动距离 |
      巧用属性：当元素满足scrollHeight - scrollTop = clientHeight的时候说明垂直滚动条滚动到最下侧了；当元素满足scrollWidth - scrollLeft = clientWidth的时候说明水平滚动条滚动倒最右侧了。  
    + 通过style属性来修改元素的样式，没修改一个样式，浏览器就需要重新渲染一次页面，这样执行的性能是比较差的，而且这中形式当我们要修改多个样式时，也不太方便。我们希望执行一行代码就能够修改多个样式，我们可以通过修改元素的class属性来间接的修改样式，这样一来，我们只需要修改一次，即可同时修改多个样式，而且浏览器只需要重新渲染页面一次，性能较好，并且这种方式，可以时表现(HTML)和行为(JS)进一步分离。

24. 事件
    + [事件对象](https://www.w3school.com.cn/jsref/dom_obj_event.asp)：当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标，键盘哪个案件配按下，鼠标滚轮的方向等。在IE8中响应函数被触发时，浏览器不会传递事件对象，在IE8及以下浏览器中，事件对象作为window对象的属性保存的，所以往往通过以下方法来解决事件对象的兼容性问题。

      ``` JavaScript
        // 方法一
        if(!event){
            event = window.event;
        }
        // 方法二
        event = event || window.event;
      ```

    + 事件冒泡(Bubble)，所谓的事件冒泡指的就是事件的向上传到，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况下冒泡都是有用的，如果不希望发生事件冒泡可以通过事件对象来取消事件冒泡，可以通过将事件对象的cancelBubble属性设置为true来取消事件冒泡。
    + 事件委派，指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件被触发时，会一直冒泡到祖先元素从而通过祖先元素的响应函数来处理事件；事件委派利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序性能。
    + 事件绑定  
      (1) 使用“对象.事件 = 事件响应函数;” 的形式为DOM对象绑定响应函数，它只能同时为一个元素绑定一个响应函数，不能绑定多个，如果绑定了多个，则后面会覆盖前面的。  
      (2) addEventListener()：通过这个方法也可以为元素绑定响应函数。参数：事件名称字符串，不要带on了；回调函数，当事件触发时该函数会被调用；是否在捕获阶段触发事件，需要一个布尔值，一般都传false。使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，这样当事件被触发时，响应函数将会按照事件响应函数的绑定顺序执行。  
      (3) addEventListener()方法不支持IE8及以下浏览器，需要使用attachEvent()方法来进行事件绑定。参数：事件名称字符串，带on；回调函数。这个方法也可以同时为一个时间绑定多个处理还是，不同的是后绑定先执行，执行顺序与addEventListener()相反。  
      (4) addEventListener()中的this，是绑定的事件对象，attachEvent()中的this是window对象，所以在做兼容性处理的时候要统一this指向。

      ``` JavaScript
        // 兼容性处理例子
        // 参数：1.obj，要绑定事件的对象，2.eventStr事件名称字符串(传递时不加on)，3.callback回调函数
        function bind(obj, eventStr, callback){
            if(obj.addEventListener){
                // 大部分浏览器兼通的方式
                obj.addEventListener(eventStr, callback, false);
            }else{
                /*
                    this是谁是由调用方式决定的
                    callback.call(obj)
                */
                // IE8及以下
                obj.attachEvent("on" + eventStr, function(){
                    // 在匿名函数中条用回调函数
                    callback.call(obj);
                });
            }
        }
      ```

    + 事件传播：  
      (1) 关于事件的传播网景公司与微软公司有不同的理解。微软公司认为事件的传播是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向元素的祖先元素上传播，也就是说事件应该在冒泡阶段执行。  
      (2) 而网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层祖先元素，然后再向内传播给后代元素，也就是说事件应该再捕获阶段执行。  
      (3) W3C综合了两个公司的方案，将事件传播分成了三个阶段：捕获阶段，在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件；目标阶段，事件捕获到目标元素，捕获结束后开始在目标元素上触发事件；冒泡阶段，事件从目标元素向它的祖先元素传递，依次触发祖先元素上的事件。  
      (4) 如果希望再捕获阶段就执行事件响应函数，则可以将addEventListener()的第三个参数设置为true，但是一般情况下我们不会希望在捕获阶段触发事件，所以这个参数经常设置为false。  
      (5) IE8及以下浏览器没有捕获阶段。
    + 鼠标滚轮事件：  
      (1) onmousewheel鼠标滚轮滚动事件，会在鼠标滚轮滚动时触发；但是在火狐中不支持该属性，在火狐中需要使用DOMMouseScroll来绑定滚动事件，注意该事件需要通过addEventListener()函数来绑定。  
      (2) 判断鼠标滚轮滚动的方向，event.wheelDelta可以获取鼠标滚轮滚动的方向，向上滚时120向下滚是-120不看大小，只看正负来判断上滚下滚；但是event.wheelDelta在火狐中不支持，需要使用event.delta来获取滚动的方向，向上滚-3向下滚3。  
      (3) 当鼠标滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为，如果不希望发生则需要return false;来取消默认行为；但是使用addEventListener()绑定的事件响应函数，取消默认行为时，不能使用return false;需要使用event.preventDefault()来取消默认行为，但是IE8不支持该方法。
    + 键盘事件：键盘事件一般绑定给一些可以获取焦点的对象或者是document。  
      (1) onkeydown：按键被按下，如果一直按住键盘某个按键不松手那么事件会一直在触发；当连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常快，这种设计是防止误操作的发生。通过event.keyCode可以判断哪个按键被按下，除了event.keyCode，事件对象还总还提供了几个属性altKey、ctrlKey、shiftKey这几个用来判断alt、ctrl、shift键是否被按下，如果按下则返回true否则返回false。  
      (2) onkeyup：按键被释放。  
      (3) 在文本框中输入内容，属于onkeydown的默认行为，果在onkeydown中取消默认行为，则输入的内容，不会出现在文本框中。

25. [BOM](https://www.w3school.com.cn/js/js_window.asp)
    + 浏览器对象模型（Browser Object Model (BOM)）允许JavaScript与浏览器对话。通过BOM我们可以通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作  
      BOM对象：
      | 对象名 | 说明 |
      | :--: | :--: |
      | window | 代表整个浏览器窗口，同时window也是网页中的全局对象 |
      | Navigator | 代表当前浏览器的信息，通过该对象可以用来识别不同的浏览器 |
      | Location | 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器的跳转页面 |
      | History | 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取具体的历史记录，只能操作浏览器向前和向后翻页 |
      | Screen | 代表用户的屏幕信息，通过该对象可以获取到用户的显示器的相关信息 |
    + Navigator对象：由于历史原因，Navigator中的大部分属性都已经不能帮助我们识别浏览器了，一般我们只会使用userAgent属性来判断浏览器信息，userAgent是一个字符串，这个字符串包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent；在IE11中已经将微软和IE相关的表示都已经去除了，所以我们基本已经不能通过userAgent来识别一个浏览器是否是IE，可以通过IE浏览器独有的一些属性来进行判断，如ActiveXObject属性，我们可以通过判断window对象是否含有该属性("ActiveXObject" in window)来判断是否是IE浏览器。
    + History对象：可以用来操作浏览器向前向后翻页。
      | 属性名/方法名 | 说明 |
      | :--: | :--: |
      | length | 属性，可以获取到当前页面访问的链接数量　|
      | back() | 方法，可以用来退回到上一个页面，作用和浏览器的回退按钮一样 |
      | forward() | 方法，可以用来前进到下一个页面，左右和浏览器的前进按钮一样 |
      | go() | 方法，可以跳转到指定的页面，他需要一个整数作为参数，1表示向前跳转一个页面相当于forward()，2表示向前跳转两个页面，-1表示向后跳转一个页面相当于back()，-2表示向后跳转两个页面，以此类推 |
    + Location对象：该对象封装了浏览器的地址栏的信息，如果直接打印location可以获取到地址栏的信息(当前页面完整路径)，如果直接将location属性修改为一个完成的路径或相对路径则我们页面会自动跳转到该路径，并且生成相应的历史记录。属性主要用来获取地址栏信息和get/post传递的数据信息，方法：
      | 方法名 | 说明 |
      | :--: | :--: |
      | assign() | 用来跳转到其他的页面，作用和直接修改location一样 |
      | reload() | 重新加载该网页，作用和刷新按钮一样，测试是否传递true都会强制清空缓存刷新 |
      | replace() | 使用心得页面替换当前页面，调用完毕也会跳转页面，但是不会生成历史记录，不可回退 |
    + window对象：
      (1) 定时器实现：setInterval()定时调用，可以将一个函数，每隔一段时间执行一次；两个参数：回调函数，该函数会每隔一段时间被调用一次，每次调用间隔的事件，单位是毫秒；返回值：返回一个Number类新的数值，这个数值用来作为定时器的唯一标识。clearInterval()可以用来关闭一个定时器，方法中需要一个定时器标识作为参数，这样关闭表示对应的定时器。理论上clearInterval()可以接收任意参数，如果参数是一个有效的定时器的标识则定制对应的定时器，如果不是一个有效的表示，则什么也不做。
      (2) 延时调用：setTimeoyt()延时调用一个函数不马上执行，而是隔一段时间以后再执行，而且只会执行一次，延时调用与定时调用的区别就是：定时调用会执行多次，而演示调用只会执行一次；使用clearTimeout()可以关闭一个延时调用。延时调用和定时调用用实际上是可以互相代替，在开发中根据自己需要进行选择。延时调用和关闭延时调用的使用方式与参数和定时器类似。

26. [JSON](https://www.w3school.com.cn/js/js_json_intro.asp)
    + JS中的对象之后JS自己认识，其他的语言都不识别；JSON就是要给特殊格式的字符串，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互。JavaScript Object Notation JS对象表示法，JSON和JS对象的格式一样，只不过JSON字符串的属性名必须加双引号，其他的和JS语法一致。
    + JSON的分类：对象{}，数组[]。
    + JSON中允许的值：字符串、数值、布尔值、null、对象、数组。
    + 将JSON字符串转换为JS中的对象，在JS中为我们提供了一个工具类，就叫JSON，它即可以帮助我们将一个JSON转换为JS对象，也可以将一个JS对象转化为JSON。  
      (1) JSON.parse()：可以将一个JSON字符串转换为JS对象，需要一个JSON字符串作为参数，会将JSON字符串转化为JS对象并返回；  
      (2) JSON.stringify()：可以将一个JS对象转化为JSON字符串，需要一个JS对象作为参数，会将转化JSON字符串返回。
    + JSON对象在IE7及以下的浏览器中不支持，所以在这些浏览器中会报错，解决方法：  
      (1) eval()：这个函数可以用来执行一段字符串形式的JSON代码，并将执行结果返回，如果使用eval()执行的字符串中含有{}，它会将其当成代码块，如果不希望将其当成代码块则可以在字符串前后添加圆括号()。eval()功能很强大，可以直接执行一个字符串的js代码，但是在开发中尽量不要使用，首先它的执行性能比较差，其次它具有一些安全隐患。  
      (2) 如果需要兼容IE7及以下的浏览器的JSON操作，常用方法时通过引入一个外部的js文件处理包(json2.js)来提供对JSON的处理。
