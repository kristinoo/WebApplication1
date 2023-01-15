using System.Collections.Generic;
using WebApplication1.Database;
using WebApplication1.Models;

namespace WebApplication1.Objects
{
    public class PairsInfo
    {
        public List<PairInfo> List { get; set; } =  null;

        public static PairsInfo Success(List<Pair> list, ApplicationContext db)
        {
            List<PairInfo> newList =  new List<PairInfo>();
            foreach (var record in list)
            {
                newList.Add(PairInfo.FromModelToObject(record, db));
            }

            return new PairsInfo
            {
                List = newList
            };
        }

        public static PairsInfo Fail(string errorMessage)
        {
            return new PairsInfo();
        }
    }
}