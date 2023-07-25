import React, { useState, useEffect } from "react";
import "./Giay.css";
import axios from "axios";

function Giay() {
  const [shoes, setShoes] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Hàm này sẽ tự động gọi khi component được hiển thị
    // Gửi yêu cầu lấy danh sách giày từ API bên core
    axios
      .get("http://localhost:8002/api/giays")
      .then((response) => {
        setShoes(response.data); // Lưu danh sách giày vào state
      })
      .catch((error) => {
        console.error("Error fetching shoes:", error);
      });

    axios
      .get("http://localhost:8002/api/anhs")
      .then((response) => {
        setImages(response.data); // Lưu danh sách ảnh vào state
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  // Hàm hỗ trợ lấy ảnh đầu tiên cho mỗi giày
  const getFirstImageForShoe = (shoeId) => {
    return images.find((image) => image.idSanpham === shoeId);
  };

  console.log(shoes);
  return (
    <>
      <div className="page-giay">
        {/* <div className="title-page">
            <h2>GIÀY</h2>
          </div> */}
        <div className="container-main">
          <div className="navbar-filter"></div>
          <div className="container-page">
            {shoes.map((shoe) => (
              <div className="container-item" key={shoe.id}>
                {/* <img
                  src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-4ft3cj603gjv8b"
                  alt=""
                /> */}
                {getFirstImageForShoe(shoe.id) && (
                  <img
                    src={getFirstImageForShoe(shoe.id).url}
                    alt={`Ảnh của giày ${shoe.tenGiay}`}
                  />
                )}
                <div className="item-name">{shoe.tenGiay}</div>
                <div className="item-price">{shoe.gia}đDDD</div>
              </div>
            ))}
            ;
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/b0fa92ff65dbfb88cd988caa793d7c62"
                alt=""
              />
              <div className="item-name">
                Giày sandal dáng slingback nữ mũi tròn phối khoá xinh xắn
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li4q2fvsflqqb9"
                alt=""
              />
              <div className="item-name">
                Giày sandal dáng slingback nữ mũi tròn phối khoá xinh xắn
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbbxbupb16ivc2"
                alt=""
              />
              <div className="item-name">
                Giày sandal dáng slingback nữ mũi tròn phối khoá xinh xắn
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/bfc0d0c9684ea6d4921cb5606d612748"
                alt=""
              />
              <div className="item-name">
                Sanđal nữ Đế Cao 5 cm Chất Da Siêu Mềm Đẹp Mới
              </div>
              <div className="item-price">125000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/b33d39102339c3092e74d9e4a4f959bf"
                alt=""
              />
              <div className="item-name">
                GIÀY CAO GÓT NỮ BÍT MŨI QUAI NGỌC GÓT CAO 7p
              </div>
              <div className="item-price">175000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134201-22120-ugk9k4i4fwkv3c"
                alt=""
              />
              <div className="item-name">Giày bốt đốc nữ</div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134201-23010-ozyoo46nm8lvcd_tn"
                alt=""
              />
              <div className="item-name">
                Giày sandal dáng slingback nữ mũi tròn phối khoá xinh xắn
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfuqqjzbnuuv86"
                alt=""
              />
              <div className="item-name">
                Giày Cao Gót Hở Eo 9P - VNXK Cao Cấp
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/719e959bae20a513a8087debb4bbea21"
                alt=""
              />
              <div className="item-name">
                Giày sandal bít mũi da lụa đính nơ xoàn đá phale quai trong suốt
                lấp lánh
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/8e4bc85f64bfc34e91bdbd083a41f342"
                alt=""
              />
              <div className="item-name">
                Sandal cao gót quai đá gót ngọc 7p mã M4
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/2927abb3244a9ad7945f4fad7c644380"
                alt=""
              />
              <div className="item-name">
                Giày cao gót 7 màu trắng đen quai ngọc mũi vuông phong cách
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/201d9aba6cad78f2c9a9745c0073dc53"
                alt=""
              />
              <div className="item-name">
                Giày Thể Thao Đế Dày Phối Lưới Thoáng Khí Phong Cách Hàn Quốc
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/5231e4324eda4edf26eaa17ee7931968"
                alt=""
              />
              <div className="item-name">
                Giày cao gót nữ quai voan gót trong 5phân
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134201-23020-fvz5l082wvnv89"
                alt=""
              />
              <div className="item-name">
                Sandal Cao Gót Đế Dày Hở Ngón Quai Chéo Chống Thấm Nước
              </div>
              <div className="item-price">75000đ</div>
            </div>
            <div className="container-item">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134201-23010-0pantqrcffmv70"
                alt=""
              />
              <div className="item-name">
                Atikota Giày Mary Jane Gót Dày Thoải Mái
              </div>
              <div className="item-price">75000đ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//}
export default Giay;
