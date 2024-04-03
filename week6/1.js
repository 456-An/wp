<html>
    <body>
        <button onclick="job()">Click Me</button>
        <script>
            function job() {
                width += 10;
                height += 10;
                b.style = `position:${position}; width:${width}; height:${height}; left:${left}; top:${top1};`;
            }
            let position = "absolute";
            let width = 60;
            let height = 40;
            let left = 20;
            let top1 = 20;
            let b = document.querySelector('button');

            b.style = `position:${position}; width:${width}; height:${height}; left:${left}; top:${top1};`;
        </script>
    </body>
</html>
