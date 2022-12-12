var path = new Path();
        path.strokeColor = "black";
        var start = new Point(100, 100);
        path.moveTo(start);
        path.lineTo(start + [100, -50]);

        var topLeft = new Point(100, 100);
        var rectSize = new Size(50, 50);
        var rect = new Rectangle(topLeft, rectSize);
        var path = new Path.Rectangle(rect, 50);
        path.fillColor = "red"
        console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
        console.log(rect.point); // { x: 10, y: 20 }
        console.log(rect.size); // { width: 200, height: 100 }