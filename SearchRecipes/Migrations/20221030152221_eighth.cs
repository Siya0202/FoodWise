using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SearchRecipes.Migrations
{
    public partial class eighth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quantities_Ingredients_IngredientId",
                table: "Quantities");

            migrationBuilder.DropForeignKey(
                name: "FK_Quantities_Recipes_RecipeId",
                table: "Quantities");

            migrationBuilder.DropIndex(
                name: "IX_Quantities_IngredientId",
                table: "Quantities");

            migrationBuilder.DropIndex(
                name: "IX_Quantities_RecipeId",
                table: "Quantities");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Quantities_IngredientId",
                table: "Quantities",
                column: "IngredientId");

            migrationBuilder.CreateIndex(
                name: "IX_Quantities_RecipeId",
                table: "Quantities",
                column: "RecipeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Quantities_Ingredients_IngredientId",
                table: "Quantities",
                column: "IngredientId",
                principalTable: "Ingredients",
                principalColumn: "IngredientId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Quantities_Recipes_RecipeId",
                table: "Quantities",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "RecipeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
