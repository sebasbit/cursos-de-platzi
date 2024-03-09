<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog</title>
</head>
<body>
    <h1>Lastest posts</h1>
    @foreach ($posts as $post)
        <article style="padding: 15px; border: 1px solid gray;">
            <header>
                <h2>
                    <a href="/blog/{{ $post['slug'] }}">{{ $post['title'] }}</a>
                </h2>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae magni aliquid quis? Eius,
            obcaecati laboriosam nostrum nemo minima quia accusamus aut quas voluptate! Obcaecati ipsum aut porro...</p>
        </article>
    @endforeach
</body>
</html>
