import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardColumns,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  Pagination, 
  PaginationItem, 
  PaginationLink
} from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import {
    cardChartData1, cardChartOpts1,
    cardChartData2, cardChartOpts2,
    cardChartData3, cardChartOpts3,
    cardChartData4, cardChartOpts4,
    mainChart, mainChartOpts, 
    piechart1, piechart2
} from './GetData'


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">

                </ButtonGroup>
                <div className="text-value">9.823</div> 
                <div>Cumulative Return(총자산 대비)</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">

                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Cumulative Return(투자금 대비)</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">

                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Funding Ratio</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">

                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Funding Amount</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader style = {{backgroundColor: "#4D4D4D", color : 'white'}}>
                Cumulative Returns
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper" style={{ height: 400 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader style = {{backgroundColor: "#4D4D4D", color : 'white'}}>
                Performance
              </CardHeader>
              <div style = {{padding: '1rem'}}>
              <Card body inverse >
                <CardHeader style={{ backgroundColor: 'transparent', color: 'black' }}><h6>Daily Transaction</h6></CardHeader>
                <CardBody>
                <Row>
                 <Col>
                 <Table responsive bordered>
                  <thead style = {{ textAlign: 'center', backgroundColor: '#E5E5E5'}}>
                      {['날짜','투자 비율', '매수금(만원)', '매도금(만원)', '실현손익', '수익률(%)', '수익여부'].map(it=><th>{it}</th>)}
                      </thead>
                    <tbody>
                      {[['2020/05/03', 50, 200, 100, 20, 1.1, 'Plus'], ['2020/05/02', 50, 200, 100, 20, 1.1, 'Plus'], 
                      ['2020/05/01', 50, 200, 100, 20, 1.1, 'Plus']].map(it=>{ return <tr>{it.map((data, num)=>{
                        if(num!=7) {
                          return <td style = {{ textAlign: 'center'}}>{data}</td>
                        } else {
                          if(data=='Plus') {
                            return <td style = {{ textAlign: 'center'}}><Badge color="success">{data}</Badge></td>
                          }
                        }
                      })}</tr>})}                        
                      </tbody>
                  </Table>
                
                <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
                </Col>
              </Row>
              </CardBody>
            </Card>

                
                <br />
                <Card body inverse >
                <CardHeader style={{ backgroundColor: 'transparent', color: 'black' }}><h6>Monthly Perfomance Analysis</h6></CardHeader>
                <CardBody>
                <Row>
                  <Col>
                      <Table responsive bordered>
                      <thead style = {{ textAlign: 'center', backgroundColor: '#E5E5E5'}}>
                      {['날짜', '누적수익률(%)', 'MDD(%)', 'Sharpe', 'Hit(%)'].map(it=><th>{it}</th>)}
                      </thead>
                      <tbody>
                      {[['2020/03/01', 10, -2, 5, 60], ['2020/02/01', 10.0, -2.0, 3.0, 60], 
                      ['2020/01/01', 10.0, -2.0, 3.0, 60]].map(it=>{ return <tr>{it.map((data, num)=>{
                          return <td style = {{ textAlign: 'center'}}>{data}</td>
                      })}</tr>})}                        
                      </tbody>
                    </Table>
                    <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
                        
                </CardBody>
                </Card>
            </div>
            </Card>
          </Col>
        </Row>

        <Card>
        <CardHeader style = {{backgroundColor: "#4D4D4D", color : 'white'}}>
          Funding Ratio
        </CardHeader>
        <div style = {{padding: '1rem'}}>
        <CardColumns className="cols-2">
            <Card>
                <CardHeader>
                  Marketcap
                </CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <Pie data={piechart1} />
                  </div>
                </CardBody>
              </Card> 

            <Card>
                <CardHeader>
                Market
                </CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <Pie data={piechart2} />
                  </div>
                </CardBody>
              </Card> 

        </CardColumns>
        </div>
      </Card>
      </div>
    );
  }
}

export default Dashboard;
