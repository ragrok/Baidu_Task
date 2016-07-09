### 居中显示
<pre>
.center{
  position: absolute;
  width: 400px;
  height: 200px;
  background: #ccc;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -100px;
  /*当有超出部分时，不显示他们*/
  overflow: hidden;
}
</pre>
- 两个扇形的原理。
- 在div中嵌套两个div，用css画出圆形。
<pre>
.left,.right{
  <!-- 脱离标准文档流，使得圆的部分可以部分显示在父容器中 -->
  position: absolute;
  border-radius: 50px;
  border: 50px solid transparent;
}
</pre>
- 设置位置，
<pre>
.left{
  border-bottom-color:#fc0;
  top: -50px;
  left: -50px;
  <!-- 变为菱形，刚好和左上角重合 -->
  transform:rotate(-45deg);
}
.right{
  border-top-color:#fc0;
  bottom: -50px;
  right: -50px;
  transform:rotate(-45deg);
}
</pre>
