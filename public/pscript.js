<script>
    function loadContent(url) {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                document.getElementById("content").innerHTML = data;
            })
        }
</script>