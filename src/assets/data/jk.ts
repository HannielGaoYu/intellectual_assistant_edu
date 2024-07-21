export const jk = [
  {
    type: '选择题',
    content: 'Java异常处理中，哪个关键字用于捕获异常？',
    correctAnswer: 'catch',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'try' },
      { letter: 'B', description: 'throw' },
      { letter: 'C', description: 'finally' },
      { letter: 'D', description: 'catch' }
    ]
  },
  {
    type: '选择题',
    content: '以下哪个选项不是Java异常类的基本结构？',
    correctAnswer: 'D',
    difficultyLevel: 2,
    options: [
      { letter: 'A', description: '继承自Throwable类' },
      { letter: 'B', description: '实现Serializable接口' },
      { letter: 'C', description: '包含构造函数和getMessage方法' },
      { letter: 'D', description: '包含toString方法' }
    ]
  },
  {
    type: '选择题',
    content: '在Java中，哪个关键字用于声明一个可能抛出异常的方法？',
    correctAnswer: 'throws',
    difficultyLevel: 1,
    options: [
      { letter: 'A', description: 'try' },
      { letter: 'B', description: 'catch' },
      { letter: 'C', description: 'finally' },
      { letter: 'D', description: 'throws' }
    ]
  },
  {
    type: '编程题',
    content:
      '编写一个Java程序，该程序接收用户输入的两个整数，并计算它们的商。如果除数为0，则抛出一个自定义异常。',
    difficultyLevel: 3
  }
]
