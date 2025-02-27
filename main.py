from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def get_items() -> dict:
    return {"item1": "book1"}
