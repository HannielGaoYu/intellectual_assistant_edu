const lessonsPromptWordsorigin = `我想学习xxx请根据你能够查询到目录的书籍当中最有名的书生成目录，包含章和节，按照一下格式返回数据：{
  "name": "计算机科学导论AI",
  "description": "介绍计算机科学的基本概念和原理",
  "chapters": [
      {
          "name": "第一章 Java语言概述AI",
          "orderNumber": 1,
          "sections": [
              {
                  "name": "Java语言入门教程",
                  "orderNumber": 1
              },
              {
                  "name": "c++",
                  "orderNumber": 2
              }
          ]
      },
      {
          "name": "第二章 c语言概述AI",
          "orderNumber": 2
      }
  ]
}`

export const top_bar_teather = [
  {
    bar_title: '视频',
    title: 'video'
  },
  {
    bar_title: 'PPT课件',
    title: 'ppt'
  },
  {
    bar_title: '作业',
    title: 'homework'
  },
]

const lessonsPromptWordsorigin_v1 = `我想学习JAVA请根据你能够查询到目录的书籍当中最有名的书生成目录，包含章和节，至少包含19章，每章至少9节，按照一下格式返回数据：{ "name": "计算机科学导论AI", "description": "介绍计算机科学的基本概念和原理", "chapters": [ { "name": "第一章 Java语言概述AI", "orderNumber": 1, "sections": [ { "name": "Java语言入门教程", "orderNumber": 1 }, { "name": "c++", "orderNumber": 2 } ] }, { "name": "第二章 c语言概述AI", "orderNumber": 2 } ] }`

const questionsPromptWordsOrigin = `根据本节内容（java异常）生成选择题和编程题，仿照以下格式生成纯文本json数据，要求选择题至少10道，编程题5道 [ { "type": "选择题", "content": "选择题1", "correctAnswer": "A", "difficultyLevel": 2, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] }, { "type": "编程题", "content": "编程题1", "answer": "示例答案", "difficultyLevel": 3 } ]`

const questionsPromptWordsOrigin_v1 = `根据本节内容（java异常）生成选择题和编程题，要求至少10道选择题，6道编程题,仿照以下格式返回纯文本数据，开头和结尾不需要富文本标签，注意引号的格式正确， [ { "type": "选择题", "content": "选择题1", "correctAnswer": "A", "difficultyLevel": 2, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] }, { "type": "编程题", "content": "编程题1", "answer": "示例答案", "difficultyLevel": 3 } ]`

const questionsPromptWordsOrigin_v2 = `根据本节内容（java异常）生成选择题和编程题，要求至少10道选择题，3道编程题,仿照以下格式返回纯文本数据，开头和结尾不需要富文本标签，注意引号的格式正确， [ { "type": "选择题", "content": "选择题1", "correctAnswer": "A", "difficultyLevel": 2, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] }, { "type": "选择题", "content": "选择题1", "correctAnswer": "A", "difficultyLevel": 2, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] },{ "type": "编程题", "content": "编程题1", "answer": "示例答案", "difficultyLevel": 3 } ]
`
export const videoPromptWordsOrigin = `根据以上课程文稿生成分点总结与重点，要求返回纯文本`

export const questionsResult = [
  {
    type: '选择题',
    content: '在Java中，哪个类是所有异常类的基类？',
    correctAnswer: 'A',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'Throwable' },
      { letter: 'B', description: 'Exception' },
      { letter: 'C', description: 'Error' },
      { letter: 'D', description: 'RuntimeException' }
    ]
  },
  {
    type: '选择题',
    content: '下列哪种异常是非受检异常（unchecked exception）？',
    correctAnswer: 'D',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'IOException' },
      { letter: 'B', description: 'NullPointerException' },
      { letter: 'C', description: 'FileNotFoundException' },
      { letter: 'D', description: 'IllegalArgumentException' }
    ]
  },
  {
    type: '选择题',
    content:
      '如果一个方法可能抛出多种异常，那么在方法签名中声明这些异常时，必须使用什么关键字？',
    correctAnswer: 'B',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'throws' },
      { letter: 'B', description: 'throw' },
      { letter: 'C', description: 'try' },
      { letter: 'D', description: 'catch' }
    ]
  },
  {
    type: '选择题',
    content: '以下哪个方法可以用来处理异常？',
    correctAnswer: 'C',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'init()' },
      { letter: 'B', description: 'start()' },
      { letter: 'C', description: 'catch()' },
      { letter: 'D', description: 'finally()' }
    ]
  },
  {
    type: '选择题',
    content: '在Java中，哪个块是用来捕获异常的？',
    correctAnswer: 'B',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'try' },
      { letter: 'B', description: 'catch' },
      { letter: 'C', description: 'finally' },
      { letter: 'D', description: 'main' }
    ]
  },
  {
    type: '选择题',
    content: '关于异常处理，下面说法正确的是？',
    correctAnswer: 'D',
    difficultyLevel: 2,
    options: [
      { letter: 'A', description: 'try块中的代码总是执行' },
      {
        letter: 'B',
        description: '一旦try块中的代码抛出异常，其后的代码仍会执行'
      },
      { letter: 'C', description: 'catch块可以处理try块中未抛出的异常' },
      {
        letter: 'D',
        description: '如果try块中的代码没有抛出异常，则关联的catch块不会被执行'
      }
    ]
  },
  {
    type: '选择题',
    content: '在Java中，如何处理一个可能抛出多种异常的方法？',
    correctAnswer: 'A',
    difficultyLevel: 2,
    options: [
      { letter: 'A', description: '可以在一个try块后跟多个catch块' },
      { letter: 'B', description: '只能使用一个catch块来捕获所有类型的异常' },
      { letter: 'C', description: '每个异常都需要单独的try-catch块' },
      { letter: 'D', description: '不能处理多种异常，只能处理一种' }
    ]
  },
  {
    type: '选择题',
    content: 'Java中的异常链是如何工作的？',
    correctAnswer: 'C',
    difficultyLevel: 2,
    options: [
      { letter: 'A', description: '异常链用于创建新的异常类型' },
      { letter: 'B', description: '异常链用于忽略旧的异常' },
      { letter: 'C', description: '异常链用于保存原始异常的原因' },
      { letter: 'D', description: '异常链用于阻止异常的传播' }
    ]
  },
  {
    type: '选择题',
    content: '调用一个抛出异常的方法时，如果不处理这个异常，程序会怎样？',
    correctAnswer: 'B',
    difficultyLevel: 2,
    options: [
      { letter: 'A', description: '程序会继续执行' },
      { letter: 'B', description: '程序会终止并打印异常栈轨迹' },
      { letter: 'C', description: '程序会提示用户输入' },
      { letter: 'D', description: '程序会进入调试模式' }
    ]
  },
  {
    type: '选择题',
    content: '在Java中，finally块有什么特点？',
    correctAnswer: 'C',
    difficultyLevel: 3,
    options: [
      { letter: 'A', description: '只有在对应的try块抛出异常时才会执行' },
      { letter: 'B', description: '总是在try和catch块之前执行' },
      {
        letter: 'C',
        description: '无论是否捕获到异常，finally块中的代码总会执行'
      },
      { letter: 'D', description: '只在使用了带资源的try语句时才需要' }
    ]
  },
  {
    type: '编程题',
    content:
      '编写一个程序，当用户输入非数字字符时，程序会抛出并处理NumberFormatException。',
    answer:
      '```java import java.util.Scanner; public class Main { public static void main(String[] args) { Scanner scanner = new Scanner(System.in); System.out.println("请输入一个数字："); String input = scanner.nextLine(); try { int number = Integer.parseInt(input); System.out.println("你输入的数字是：" + number); } catch (NumberFormatException e) { System.out.println("输入错误，请输入数字。"); } } } ``` 这段代码首先提示用户输入一个数字，然后尝试将输入的字符串转换为整数。如果输入不是有效的整数，将抛出`NumberFormatException`，然后在catch块中处理该异常。',
    difficultyLevel: 2
  },
  {
    type: '编程题',
    content: '创建一个自定义异常类，继承自Exception类，并在另一个类中使用它。',
    answer:
      '```java // 自定义异常类 class CustomException extends Exception { public CustomException(String message) { super(message); } } // 使用自定义异常的类 public class Main { public static void main(String[] args) throws CustomException { checkAge(15); } public static void checkAge(int age) throws CustomException { if (age < 18) { throw new CustomException("年龄不足，无法访问。"); } else { System.out.println("欢迎访问！"); } } } ``` 在这个例子中，我们首先定义了一个名为`CustomException`的自定义异常类，该类继承自`Exception`基类。接着，在`Main`类中，我们定义了一个`checkAge`方法，该方法接受一个年龄参数，并根据年龄是否低于18岁来决定是否抛出`CustomException`。如果抛出异常，我们在`main`方法中调用该方法并处理异常。',
    difficultyLevel: 2
  },
  {
    type: '编程题',
    content: '编写一个程序，通过try-with-resources语句确保文件资源的正确关闭。',
    answer:
      '```java import java.io.BufferedReader; import java.io.FileReader; import java.io.IOException; public class Main { public static void main(String[] args) { try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) { String line; while ((line = br.readLine()) != null) { System.out.println(line); } } catch (IOException e) { System.out.println("读取文件时发生错误： " + e.getMessage()); } } } ``` 此例中，我们使用try-with-resources语句打开一个文件进行读取。这种方式可以自动关闭资源，无需显式调用`close`方法。如果在读取过程中发生任何IO异常，它们会被捕获并在catch块中处理。',
    difficultyLevel: 3
  },
  {
    type: '编程题',
    content:
      '编写一个程序，演示如何在方法内部处理异常，并把处理的结果返回给调用者。',
    answer:
      '```java public class Main { public static void main(String[] args) { try { int result = divide(10, 0); System.out.println("结果是： " + result); } catch (ArithmeticException e) { System.out.println("发生错误： " + e.getMessage()); } } public static int divide(int a, int b) { try { return a / b; } catch (ArithmeticException e) { System.out.println("在divide方法中捕获到异常： " + e.getMessage()); return -1; // 返回错误码表示失败 } } } ``` 在这个例子中，我们定义了一个`divide`方法，该方法尝试执行除法运算。如果传入的除数是0，将抛出`ArithmeticException`。这个异常在`divide`方法内部被捕获，并打印一条消息，然后返回一个错误码-1表示失败。调用者可以根据这个返回值来确定操作是否成功。',
    difficultyLevel: 3
  },
  {
    type: '编程题',
    content: '编写一个程序，展示如何使用多个catch块处理不同类型的异常。',
    answer:
      '```java public class Main { public static void main(String[] args) { try { int[] numbers = new int[5]; numbers[10] = 100; // 触发ArrayIndexOutOfBoundsException int result = 10 / 0; // 触发ArithmeticException } catch (ArrayIndexOutOfBoundsException e) { System.out.println("数组越界： " + e.getMessage()); } catch (ArithmeticException e) { System.out.println("算术错误： " + e.getMessage()); } } } ``` 在此例中，我们故意制造了两种不同类型的异常：`ArrayIndexOutOfBoundsException`和`ArithmeticException`。每种异常都由其对应的catch块进行处理。这样，即使有多个异常发生，程序也能分别对它们进行处理。',
    difficultyLevel: 3
  },
  {
    type: '编程题',
    content: '编写一个程序，使用throw关键字手动抛出一个异常。',
    answer:
      '```java public class Main { public static void main(String[] args) { try { checkAge(16); } catch (Exception e) { System.out.println("发生异常： " + e.getMessage()); } } public static void checkAge(int age) throws Exception { if (age < 18) { throw new Exception("未成年，无法进行操作。"); } else { System.out.println("欢迎访问！"); } } } ``` 在此例中，我们定义了一个`checkAge`方法，该方法接收一个年龄作为参数。如果年龄小于18岁，它将使用`throw`关键字手动抛出一个异常。这个异常在`main`方法中被捕获并处理。',
    difficultyLevel: 3
  }
]

export const coderSideData = [
  {
    id: 1,
    title: '代码生成',
    type: '',
    link: '/main/coder/genger-code'
  },
  {
    id: 2,
    title: '代码纠错',
    type: '',
    link: '/main/coder/code-promote'
  }
]

export const top_bar_student = [
  {
    bar_title: '视频',
    title: 'video'
  },
  {
    bar_title: 'PPT课件',
    title: 'ppt'
  },
  {
    bar_title: '作业',
    title: 'homework'
  },
  {
    bar_title: '总结',
    title: 'summary'
  }
]

export const class_nav = [
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl:
                    'https://vod.pipi.cn/fec9203cvodtransbj1251246104/bb68c7515285890807928280731/v.f42906.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',

                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  },
  {
    title: 'c语言',
    chapters: [
      {
        ChapterTitle: '第一章 C语言概述',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言入门教程',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的历史',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的现在',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言的未来',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第二章 C语言快速入门',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言第一个简单实例',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言实例说明（解剖C语言）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本教程的相关说明',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第三章 C语言的数据类型',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言变量与常量数据（有什么区别）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言数据类型和关键字大全',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第四章 C语言中的基本输入输出',
        content: '',
        sections: [
          {
            SectionTitle: '字符输出函数putchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '字符输入函数getchar',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输出函数printf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言格式化输入函数scanf实例详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串接收函数gets的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言字符串输出函数puts的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第五章 C语言运算符和表达式',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言赋值运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言算数运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言sizeof运算符',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言逻辑运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言?:条件运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言关系运算符实例讲解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第六章 C语句和程序流',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第七章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      },
      {
        ChapterTitle: '第八章 C语言函数',
        content: '',
        sections: [
          {
            SectionTitle: 'C语言表达式和语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言if选择结构',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言switch case语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言break语句的用法',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言while循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言dowhile循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言for循环语句详解',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言循环的嵌套讲解（附实例）',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: 'C语言continue语句',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          },
          {
            SectionTitle: '本章总结与作业',
            content: '',
            video: {
              VideoTile: '视频',
              videos: [
                {
                  moviesName: 'C语言入门教程1',
                  moviesUrl: 'http://vjs.zencdn.net/v/oceans.mp4'
                },
                {
                  moviesName: 'C语言入门教程2',
                  moviesUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
                }
              ]
            },
            ppt: { PptTilte: 'ppt课件', ppts: [{}, {}] },
            homework: [
              {
                type: '选择题',
                questions: [
                  {
                    question: '',
                    options: {
                      A: '',
                      B: '',
                      C: '',
                      D: ''
                    },
                    right: 'A'
                  }
                ]
              },
              {
                type: '编程题',
                questions: [
                  {
                    question: '',
                    right: ''
                  }
                ]
              }
            ],
            summary: {
              SummaryTitle: '总结'
            }
          }
        ]
      }
    ]
  }
]
