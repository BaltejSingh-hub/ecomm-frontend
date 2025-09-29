db.createView(
    "get2025movies",
    "movies",
    [
        {$match:{year:2025}}
    ]
)


